FROM denoland/deno:1.23.4
EXPOSE 8080
WORKDIR /project
ADD . .
ENV RUCK_DEV false
ENV RUCK_PORT 8080
CMD ["./scripts/serve.sh"]
