import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";
import useProductStore from "../../store/products";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useEffect, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export default function ActionAreCard({ data, liked }: any) {
  const navigate = useNavigate();
  const { likeProduct } = useProductStore();
  const [like, setLike] = useState(false);
  const handleClick = (id: string) => {
    navigate(`/product/${id}`);
  };
  const handleChange = async (id: string) => {
    try {
      const response: any = await likeProduct(id);
      if (response.status === 201) {
        setLike(response.data);
      }
    } catch (error) {
      console.error(error);
      navigate("/signin");
    }
  };
  useEffect(() => {
    if (liked.includes(data.product_id)) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [liked]);
  return (
    <>
      <Card sx={{ maxWidth: 255, position: "relative" }}>
        <CardActionArea onClick={() => handleClick(data.product_id)}>
          <CardMedia
            sx={{
              height: 255,
              width: "100%",
              backgroundImage: `url(${data.image_url})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
            component="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.product_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description.length > 30
                ? data.description.slice(0, 30) + "..."
                : data.description}
            </Typography>
            <div className="mt-2">
              {data.discount > 0 ? (
                <p className="line-through text-[#646363d0]">{data.cost} $</p>
              ) : (
                <p>-</p>
              )}
              <p>
                {Math.round(data.cost - (data.cost / 100) * data.discount)} $
              </p>
            </div>
          </CardContent>
        </CardActionArea>
        {like ? (
          <FavoriteOutlinedIcon
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              color: "#1976D2",
              cursor: "pointer",
              fontSize: "27px",
            }}
            onClick={() => handleChange(data.product_id)}
          />
        ) : (
          <FavoriteBorderOutlinedIcon
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              color: "#1976D2",
              cursor: "pointer",
              fontSize: "27px",
            }}
            onClick={() => handleChange(data.product_id)}
          />
        )}
        <IconButton
          sx={{
            position: "absolute",
            bottom: 12,
            right: 12,
            color: "#1976D2",
            cursor: "pointer",
          }}
        >
          <AddShoppingCartOutlinedIcon />
        </IconButton>
        {
          data.discount > 0 ? (
            <div className="w-[50px] rounded text-center bg-[#1976D2] absolute top-0 left-0">
              <p className="text-[#fff]">-{data.discount}%</p>
            </div>
          ) : null
        }
      </Card>
    </>
  );
}
