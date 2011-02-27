CouchFoo::Base.set_database(:host => "https://vss123:jprece@vss123.cloudant.com", :database => "contacts")
CouchFoo::Base.logger = Rails.logger

class Contact < CouchFoo::Base
  property :name, String
  property :birthday, String
  property :official_email, String
  property :personal_email, String
  property :contact_number, String
  property :place, String
end
