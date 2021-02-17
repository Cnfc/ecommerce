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
      <div> kubectl get pods</div>
      <div>logs</div>
      <div>kubectl descrive pod 'name'</div>
      <div>kubectl descrive development 'name'</div>
      <div>kubectl exec -it posts sh</div>
      <div>delete pods 'name'</div>
      <div>delete development 'name'</div>
    </div>
  );
};

export default K8s;
