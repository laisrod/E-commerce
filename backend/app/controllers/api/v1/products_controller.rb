module Api
  module V1
    class ProductsController < BaseController
      def index
        products = Product.by_type(params[:type]).order(:id)
        render json: products
      end

      def show
        product = Product.find(params[:id])
        render json: product
      end
    end
  end
end
