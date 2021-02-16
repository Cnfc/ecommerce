import React from "react";

const K8s = () => {
  return (
    <div>
      Kubectl
      <span>Kubectl commands: </span>
      apply -f name.yaml - run name kube get pods - get all active pods
    </div>
  );
};

export default K8s;
