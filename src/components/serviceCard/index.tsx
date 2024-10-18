import { Typography } from "antd";
import { Link } from "react-router-dom";

interface BlogData {
  id: string;
  title: string;
  content: string;
  image: string;
}

interface Props {
  item: BlogData;
  clickFN?: (item: BlogData) => void;
}

const ServiceCard = ({ item, clickFN }: Props) => {
  const { Title, Paragraph } = Typography;

  const handleClick = () => {
    if (clickFN) {
      clickFN(item);
    }
  };

  return (
    <div key={item.id} className="w-full cursor-pointer" onClick={handleClick}>
      <Link to="/" className="w-full h-[214px] rounded-md mb-[16.5px]">
        <img
          src={item.image}
          alt="uploaded image"
          className="w-full h-[214px] rounded-[14px] object-cover"
        />
      </Link>

      <Link to="/">
        <Title
          style={{
            color: "#2C2C2C",
          }}
          ellipsis={{ rows: 1, expandable: false }}
          level={4}
        >
          {item.title}
        </Title>
      </Link>

      <Paragraph
        style={{
          color: "#757575",
        }}
        ellipsis={{ rows: 2, expandable: false }}
      >
        {item.content}
      </Paragraph>
      <Link to="#" className="flex items-center gap-x-[15px]">
        <div className="font-[14px] text-[#1D48E7] hover:underline">
          Learn more
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
