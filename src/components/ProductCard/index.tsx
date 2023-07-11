import styled from 'styled-components';
import { ProductCardProps } from './types';
import Text from 'components/Text';
import { Card } from 'components';
import Image from 'components/Image';

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BestSeller = styled.div`
  display: flex;
  min-width: 85px;
  border-radius: 40px;
  border: 2px solid #5870ff;
`;

const Favorite = styled.div`
  min-width: 20px;
  border-radius: 100%;
  border: 2px solid #c94403;
  text-align: center;
`;

const CardImage = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CardContent = styled.div``;

const CardContentArea = styled.div`
  & span {
    color: black;
  }
  & .throughPrice {
    text-decoration: line-through;
    margin-left: 10px;
  }
`;

const CardActionArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Dot = styled.div<{ color?: string }>`
  width: 20px;
  height: 20px;
  background: ${({ color }) => (color ? color : 'white')};
  border: 0.5px solid ${({ color }) => (color == '#FFFFFF' ? 'black' : color)};
  border-radius: 100%;
`;

const CardFooter = styled.div`
  & span {
    text-decoration-line: underline;
    color: #c94403;
    cursor: pointer;
  }
`;

const ProductCard = ({
  bestSellerBtn,
  favoriteImage,
  image,
  title,
  capacity,
  price,
  previousPrice,
  color,
  actionColor,
  innerContent,
  footerlink,
}: ProductCardProps) => {
  return (
    <Card style={{ padding: 23, margin: 12 }}>
      <CardHeader>
        {bestSellerBtn && (
          <>
            {bestSellerBtn.map((item, index) => {
              return (
                <BestSeller key={index}>
                  <Image
                    src={item.image}
                    style={{ marginRight: 5, marginTop: 4, marginLeft: 5 }}
                    width={10}
                    height={10}
                    alt="bestseller"
                  />
                  <Text
                    font="body_md"
                    color="#5870FF"
                    style={{ fontSize: 12, letterSpacing: -0.32 }}
                  >
                    {item.title}
                  </Text>
                </BestSeller>
              );
            })}
          </>
        )}
        <Favorite>
          <Image src={favoriteImage} width={10} height={10} alt="bestsellerheart" />
        </Favorite>
      </CardHeader>
      <CardImage>
        <Image src={image} alt="bestsellerImage" />
      </CardImage>
      <CardContent>
        <CardContentArea>
          <Text font="body_md" color="#5870FF" style={{ textAlign: 'center' }}>
            {title} | <span>{capacity}</span>
          </Text>
          <Text font="body_md" color="#5870FF" style={{ textAlign: 'center', marginTop: 5 }}>
            {price}
            <span className="throughPrice">{previousPrice}</span>
          </Text>
          <Text
            font="body_md"
            color="#5870FF"
            style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}
          >
            {color}
          </Text>
        </CardContentArea>
        <CardActionArea>
          {actionColor && (
            <>
              {actionColor.map((item, index) => {
                return <Dot key={index} color={item.color}></Dot>;
              })}
            </>
          )}
        </CardActionArea>
      </CardContent>
      <CardFooter>
        <Text
          font="body_md"
          color="text_primary"
          style={{ textAlign: 'center', fontSize: 10, fontWeight: 500 }}
        >
          {innerContent}
          <Image src={'./branding/svg/bestselleraffirm.svg'} alt="bestsellerAffirm" />
          <span>{footerlink}</span>
        </Text>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
