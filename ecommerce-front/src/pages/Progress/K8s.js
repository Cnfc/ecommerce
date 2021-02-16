import React from "react";

const K8s = () => {
  return (
    <div>
      Kubectl
      <span>Kubectl commands: </span>
      <div>
        apply -f name.yaml - run name kube get pods - get all active pods
      </div>
      <div>get pods</div>
      <div>logs</div>
      <div>delete pods 'name'</div>
      <div>descrive pod 'name'</div>
      <div>kubectl exec -it posts sh</div>
    </div>
  );
};

export default K8s;
