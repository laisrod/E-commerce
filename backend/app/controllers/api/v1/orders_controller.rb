module Api
  module V1
    class OrdersController < BaseController
      def index
        orders = Order.includes(:order_items, :products).order(created_at: :desc)
        render json: orders, include: { order_items: { include: :product } }
      end

      def show
        order = Order.includes(:order_items, :products).find(params[:id])
        render json: order, include: { order_items: { include: :product } }
      end

      def create
        order = Order.new(order_params)

        build_order_items(order)

        if order.save
          render json: order, include: { order_items: { include: :product } }, status: :created
        else
          render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def order_params
        params.require(:order).permit(:first_name, :last_name, :email, :address, :phone)
      end

      def build_order_items(order)
        items = params.require(:order).permit(items: [:product_id, :quantity])[:items] || []

        items.each do |item_params|
          product = Product.find(item_params[:product_id])
          order.order_items.build(
            product: product,
            quantity: item_params[:quantity].to_i,
            unit_price: product.price
          )
        end
      end
    end
  end
end
