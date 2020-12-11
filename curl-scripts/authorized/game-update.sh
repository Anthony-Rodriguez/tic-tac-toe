# To run from your terminal:
  # VALUE='' INDEX='' sh curl-scripts/authorized/sign-in.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": false
    }
  }'

echo
