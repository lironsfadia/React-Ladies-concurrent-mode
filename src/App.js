import React, { Suspense, useState, useTransition } from "react";
import Spinner from "./Spinner";
import Error from "./Error";
import { suspendable } from "./suspendable";
import { fetchPost } from "./api";

const PostCard = React.lazy(() => import("./postCard"));

const initialPost = suspendable(fetchPost(1));

function App() {
  const [postResource, setPostResource] = useState(initialPost);
  const [pending, startTransition] = useTransition();

  const nextPost = () => {
    startTransition(() => {
      setPostResource(suspendable(fetchPost(postResource.read().id + 1)));
    });
  };

  return (
    <div className="container">
      <header className="display-1">React Ladies Pro Edition | 2022</header>
      <button className="btn btn-lg btn-outline-primary" onClick={nextPost}>
        Next
        {pending && <Spinner />}
      </button>
      <Error fallback={<p>card failed to load</p>}>
        <Suspense fallback={<Spinner />}>
          <PostCard postResource={postResource} />
        </Suspense>
      </Error>
    </div>
  );
}

export default App;

// react query, redux
