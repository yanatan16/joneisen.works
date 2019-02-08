FROM jekyll/jekyll:latest

WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle install
