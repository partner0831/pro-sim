#run in the api directory

# I used homebrew (https://brew.sh) to install:
# - curl https://formulae.brew.sh/formula/curl
# - openapi-generator-cli https://formulae.brew.sh/formula/openapi-generator

curl http://127.0.0.1:5000/swagger/v1/swagger.json > swagger.json

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/swagger.json \
    -g typescript-axios \
    -o /local --skip-validate-spec


echo "\nThe api has been regenerated"
