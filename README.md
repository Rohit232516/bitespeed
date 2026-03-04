# Bitespeed Identity Reconciliation Service

This service provides an identity reconciliation API for Bitespeed. It helps in linking multiple contacts based on email and phone numbers.

## API Endpoint

The application is deployed on Railway.

Base URL:
https://bitespeed-production-348e.up.railway.app

Identity reconciliation endpoint:
POST /identify

Example request:

POST https://bitespeed-production-348e.up.railway.app/identify

Body (JSON):
{
  "email": "doc@hillvalley.edu",
  "phoneNumber": "1955102600"
}

Testing Instructions:
1. Open Postman
2. Select POST request
3. Use the endpoint above
4. Set Body → raw → JSON
5. Send the request

This endpoint returns the consolidated contact information as required in the assignment.
