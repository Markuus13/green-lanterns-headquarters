FactoryBot.define do
  factory :ticket do
    sequence(:title)       { |n| "Deal #{n} não visualiza tela de propostas" }
    sequence(:description) { |n| "Deal #{n} entrou na ESI Z e enviou docs" }
  end
end