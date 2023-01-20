FROM ruby:3.2.0-alpine3.17

# Install necessary dependencies
RUN apk update && apk add --no-cache \
    build-base \
    postgresql-dev \
    nodejs \
    tzdata

# Set the working directory
WORKDIR /app

# Copy the Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install the gems
RUN bundle install

# Copy the rest of the application code
COPY . .


# Expose the port 3000
EXPOSE 3000

# Start the application
CMD ["rails", "server", "-b", "0.0.0.0"]