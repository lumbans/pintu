FROM golang:1.17-alpine as builder  

WORKDIR /app
COPY go.mod .
COPY main.go ./

RUN go build -o /goping

FROM alpine:3.14
WORKDIR /
COPY --from=builder /goping /goping
EXPOSE 10000

ENTRYPOINT ["/goping"]