import Link from 'next/link';

const LinkButton = ({ href, text, color }) => (
  <Link {...href}>
    <button className={`button is-medium is-rounded is-light ${color}`}>{text}</button>
  </Link>
);

export default LinkButton;
