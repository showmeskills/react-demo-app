import React, { useState } from "react";
import { SelectedItemProps } from "../../interface/DemoTable/SelectedItem.interface";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid2";
import ImageComponent from "../components/ImageComponent";
const SelectedItem: React.FC<SelectedItemProps> = ({ currentItem }) => {
  const [value, setValue] = useState(0);
  const tabs = [
    {
      id: 0,
      label: "Properties",
      properties: currentItem?.properties || null,
    },
    {
      id: 1,
      label: "Image",
      image: `http://localhost:8080/image/${currentItem?.guid || ""}`,
      imageAlt: currentItem?.guid || "",
    },
  ];
  return (
    <>
      <Tabs value={value} onChange={(event, newValue) => setValue(newValue)}>
        {tabs.map((item) => (
          <Tab label={item.label} key={item.id} value={item.id} />
        ))}
      </Tabs>
      {tabs.map((item) => {
        return (
          <div role="tabpanel" key={item.id} hidden={value !== item.id}>
            {currentItem ? (
              <>
                {value === 0 && (
                  <>
                    <Grid
                      container
                      spacing={2}
                      justifyContent={"space-between"}
                      padding={2}
                    >
                      <Grid size={6}>propString</Grid>
                      <Grid size={6}>{item.properties?.propString || "-"}</Grid>
                      <Grid size={6}>propNumber</Grid>
                      <Grid size={6}>{item.properties?.propNumber || "-"}</Grid>
                      <Grid size={6}>date</Grid>
                      <Grid size={6}>{item.properties?.date || "-"}</Grid>
                    </Grid>
                  </>
                )}
                {value === 1 && (
                  <>
                    <ImageComponent
                      src={item.image || ""}
                      alt={item.imageAlt || ""}
                      size={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </>
                )}
              </>
            ) : (
              <>No Selected Item</>
            )}
          </div>
        );
      })}
    </>
  );
};

export default SelectedItem;
