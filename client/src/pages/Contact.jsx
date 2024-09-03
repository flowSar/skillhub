import React, { useState } from "react";
import { services } from "../data/services.js";
import SimpleHeader from "../components/SimpleHeader.jsx";

const Contact = () => {
  const [service, setSelectedService] = useState("");


  return (
    <>
      <SimpleHeader />
      <p className="line-clamp-2 w-[20rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sit a dolorem sed excepturi illo explicabo labore ullam vero numquam optio beatae pariatur modi molestiae expedita sapiente autem consequuntur minus, minima, esse ad facere assumenda quisquam iusto? A, ipsa? Cupiditate consequuntur, repellat molestias recusandae quibusdam quia deserunt eveniet et amet.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam optio aut quas, voluptatibus aliquam deleniti doloremque nam aperiam unde. Repellendus reiciendis est quasi blanditiis dignissimos culpa quas maxime optio sunt molestiae neque nemo unde laboriosam atque, sapiente nihil? Alias quaerat error architecto quo distinctio magni reiciendis culpa in rem itaque. Sequi aut consequatur assumenda cum aliquam ipsa incidunt eligendi in. Blanditiis totam, ab voluptatem neque ipsa beatae fugiat quae odio nobis veritatis sint iusto maiores sapiente repellat! Beatae, odit culpa numquam eveniet, expedita animi tempora dolores quod illo molestias at ipsum unde ut quibusdam aperiam fugiat esse aliquid nemo?
      </p>
    </>
  );
};

export default Contact;
