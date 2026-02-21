puts "Seeding products..."

products = [
  { name: "Cooking Oil", price: 10.50, product_type: "grocery", image_url: "/img/product.svg" },
  { name: "Pasta", price: 6.25, product_type: "grocery", image_url: "/img/product.svg" },
  { name: "Cake", price: 5.00, product_type: "grocery", image_url: "/img/product.svg" },
  { name: "Shampoo", price: 8.99, product_type: "beauty", image_url: "/img/product.svg" },
  { name: "Face Cream", price: 12.50, product_type: "beauty", image_url: "/img/product.svg" },
  { name: "Batom", price: 9.75, product_type: "beauty", image_url: "/img/product.svg" },
  { name: "Headphones", price: 29.99, product_type: "electronics", image_url: "/img/product.svg" },
  { name: "DVD", price: 99.99, product_type: "electronics", image_url: "/img/product.svg" },
  { name: "TV", price: 49.99, product_type: "electronics", image_url: "/img/product.svg" },
]

products.each do |attrs|
  Product.find_or_create_by!(name: attrs[:name]) do |p|
    p.price = attrs[:price]
    p.product_type = attrs[:product_type]
    p.image_url = attrs[:image_url]
  end
end

puts "✅ #{Product.count} products seeded!"
