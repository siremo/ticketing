Ticketing
========
This repository contains a microservices-based ticketing application built using Kubernetes and the pub/sub messaging pattern. The primary goal of this project was to learn and implement microservices deployment and management on Kubernetes. The frontend, developed with Next.js, was not the main focus and serves primarily as a learning tool.

Project Overview
--------------------------
This application demonstrates the use of microservices architecture to handle a ticketing system. It includes several services:
  * **Auth**: Handles authentication and authorization.
  * **Tickets**: Manages ticket creation and updates.
  * **Orders**: Manages order creation and status.
  * **Payments**: Handles payment processing.
  * **Expiration**: Manages ticket expiration.
  * **Client**: Frontend developed in Next.js (not the focus of the project).

The application is deployed using Kubernetes, with each service running in its own container, communicating via NATS for pub/sub messaging.

Payments
--------------------------
The payment service is currently in developer mode. You can make payments using one of Stripe's test cards::
  * **Number**: 4242 4242 4242 4242
  * **CVC**: Any 3 digits
  * **Expiry Date**: Any future date
