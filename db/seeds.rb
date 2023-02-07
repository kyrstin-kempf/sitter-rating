# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ben = User.create!(first_name: 'Ben', last_name: 'Shepiro', email: 'benny@aol.com'. password_digest: 'testpassword')
lacy = User.create!(first_name: 'Lacy', last_name: 'Guest', email: 'lg@hotmail.com'. password_digest: 'testpassword2222')

kyrstin = Sitter.create!(name: 'kyrstin', email: 'kyrstin@aol.com', years_of_experience: 7, hourly_rate: 20)
jessie = Sitter.create!(name: 'jessie', email: 'jessiejones@yahoo.com', years_of_experience: 3, hourly_rate: 18)

Rating.create!(rating: 4.2, sitter_id: kyrstin.id, user_id: ben.id)
Rating.create!(rating: 3.8, sitter_id: jessie.id, user_id: ben.id)
Rating.create!(rating: 2.8, sitter_id: kyrstin.id, user_id: ben.id)
Rating.create!(rating: 5, sitter_id: jessie.id, user_id: ben.id)