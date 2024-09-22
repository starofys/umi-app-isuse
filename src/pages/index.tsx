import yayJpg from '../assets/yay.jpg';
import {Custom} from "@/layouts/props";

export default function HomePage() {
    const a = new Custom()
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
