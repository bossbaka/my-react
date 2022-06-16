import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";

function ProductItem({ product, onAddOrder, onDelProducts, onEditProducts }) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={`${location.pathname == "/products" ? 3 : 4}`}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={product.thumbnail}
          alt={product.productName}
        />
        <CardContent>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6">{product.productName}</Typography>
            <Typography variant="body1" color="text.secondary">
              {product.unitPrice} บาท
            </Typography>
          </Stack>
        </CardContent>

        {onAddOrder && (
          <Button
            variant="contained"
            fullWidth
            onClick={() => onAddOrder(product)}
            style={{ borderRadius: 0 }}
          >
            เพิ่ม
          </Button>
        )}

        {(onDelProducts || onEditProducts) && (
          <Button
            fullWidth
            color="info"
            onClick={() => onEditProducts(product)}
          >
            แก้ไข
          </Button>
        )}

        {(onDelProducts || onEditProducts) && (
          <Button
            fullWidth
            color="error"
            onClick={() => onDelProducts(product)}
          >
            ลบ
          </Button>
        )}
      </Card>
    </Grid>
  );
}

export default ProductItem;
