# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_jprece2006_session',
  :secret      => '40579a1ff6fd4f0b5ab095bd3c09ae3331fef64eeb67dce8a281cddf35a560b9a3d540a2f49de55337727070f9665ef4efb87313d84d902a34b6540039de0a35'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
