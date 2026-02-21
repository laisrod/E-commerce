class Order < ApplicationRecord
  STATUSES = %w[pending confirmed shipped delivered cancelled].freeze

  has_many :order_items, dependent: :destroy
  has_many :products, through: :order_items

  validates :status, presence: true, inclusion: { in: STATUSES }
  validates :first_name, presence: true, length: { minimum: 3 }
  validates :last_name, presence: true, length: { minimum: 3 }
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :address, presence: true, length: { minimum: 3 }
  validates :phone, presence: true, format: { with: /\A\d+\z/, message: "must contain only numbers" }

  before_save :calculate_total

  private

  def calculate_total
    self.total = order_items.sum { |item| item.subtotal || 0 }
  end
end
