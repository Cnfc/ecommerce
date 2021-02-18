import React from "react";

const K8s = () => {
  return (
    <div>
      Kubectl
      <span>Kubectl commands: </span>
      <div>
        kubectl apply -f name.yaml - run name kube get pods - get all active
        pods
      </div>
      <div>k rollout restart deployment name</div>
      <div> kubectl get pods</div>
      <div> kubectl get services</div>
      <div> kubectl get deployments</div>
      <div>logs</div>
      <div>kubectl descrive pod 'name'</div>
      <div>??? kubectl descrive development 'name'???</div>
      <div>kubectl exec -it posts sh</div>
      <div>delete pods 'name'</div>
      <div>delete development 'name'</div>
      <ul>
        Types of Services:
        <li>
          Cluster IP : Sets up an easy-to-remember URL to access a pod. Only
          exposes pods in the cluster
        </li>
        <li>
          Node Port : Makes a pod acessible from outside the cluster. Usually
          only used for dev purpose
        </li>
        <li>
          Load Balancer: Makse a pod acessible from outside the cluster. This is
          the right way to expose a pod to the outside world
        </li>
        <li>
          External Name: Redirects an in-cluster request to a CHANGE URL.{" "}
        </li>
      </ul>
    </div>
  );
};

export default K8s;
