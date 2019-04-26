FROM ruby:2.6.0-alpine
WORKDIR /app

RUN apk add --no-cache --update build-base sqlite-dev nodejs tzdata

COPY Gemfile Gemfile.lock ./
RUN bundle install

ENV RAILS_ENV production
ENV SECRET_KEY_BASE secret
ENV RAILS_LOG_TO_STDOUT true
COPY . .

RUN rails db:migrate && rake assets:precompile
CMD ["rails","s"]

EXPOSE 3000

