class Product < ApplicationRecord
  TYPES = %w[grocery beauty electronics].freeze

  has_many :order_items, dependent: :restrict_with_error

  validates :name, presence: true
  validates :price, presence: true, numericality: { greater_than: 0 }
  validates :product_type, presence: true, inclusion: { in: TYPES }

  scope :by_type, ->(type) { where(product_type: type) if type.present? }
end
