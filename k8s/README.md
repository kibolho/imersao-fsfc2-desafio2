## To start the application using kubernetes, run the following commands

### Start nest api

```sh
kubectl apply -f server-nest/deploy.yaml
kubectl expose -f server-nest/deploy.yaml
kubectl port-forward service/nest-route-api 3000
```

### Start react frontend

```sh
kubectl apply -f client-react/deploy.yaml
kubectl expose -f client-react/deploy.yaml
kubectl port-forward service/client-react 3001:3000
```

Then, acess the application at http://localhost:3001