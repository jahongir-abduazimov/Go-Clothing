import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreCard({ data }: any) {
  return (
    <Card sx={{ maxWidth: 255 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://picsum.photos/100/100"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.product_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description.slice(0, 100)}
          </Typography>
          <div className="mt-2">
            {data.discount > 0 ? (
              <p className="line-through text-[#646363d0]">{data.cost} $</p>
            ) : (
              <p>-</p>
            )}
            <p>{Math.round(data.cost - (data.cost / 100) * data.discount)} $</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
