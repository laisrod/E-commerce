class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :product

  validates :quantity, presence: true, numericality: { greater_than: 0 }
  validates :unit_price, presence: true, numericality: { greater_than: 0 }
  validates :subtotal, presence: true, numericality: { greater_than_or_equal_to: 0 }

  before_validation :set_prices

  private

  def set_prices
    self.unit_price ||= product&.price
    self.subtotal = (unit_price || 0) * (quantity || 0)
  end
end
