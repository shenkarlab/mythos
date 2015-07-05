 #landuse{
  [zoom>=4]{
    image-filters: agg-stack-blur(0,0);
  }
  [zoom<=3]{
    image-filters: agg-stack-blur(100,100);
  }
}