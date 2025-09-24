    {/* <Box
          // here i need to work on
          // In smaller screen the carder details on proper
          // using flex. make it perfect
          sx={{                                                                 // main black screen banner ... by Ajai
            display: "flex",
            flexDirection: { xl:"row",
              lg:"row",
              md:"row",
              sm:"row",
              xs:"column"


            },
            backgroundColor: "#06000068",
            justifyContent: "space-around",
            // justifyContent:"center",
            alignItems:"center",
            
            borderRadius: "4px",
            height: {xl:"92px",
              lg:"92px",
              md:"92px",
              sm:"92px",
              xs:"112px" },
            backdropFilter: "blur(5px)",
            color: "#52F990",
            width: "100%",
            marginTop: "20px",
            padding: "4px",
           
          }}
        > 
        <Box                                                                      //111111111111111111
         sx={{ display:"flex", direction:"row",justifyContent: "space-around",
           bgcolor:"red",
              // gap:{
              //       xl: 20,
              //       lg: 15,
              //       md: 10,
              //       sm: 6,
              //       xs: 2
              //     }
         }}                                                                
        
        >
          <Box                                                                  // this  1st icon...aj
            sx={{
              display: "flex",
              flexDirection: "row ",
              alignItems: "center",
              justifyContent: "center",
              // gap: "15px",
              gap: {
                xl: "15px",
                lg: "15px",
                md: "10px",
                sm: "6px",
                xs: "2px",
              },
            }}
          >
            <Box>
              <Avatar
                sx={{
                  padding: 1,
                  bgcolor: "#2d2d2dff",
                  // bgcolor:"transparent",
                  // backdropFilter:'blur(100px)',
                  backdropFilter: "blur(15px)",
                  width: {
                    xl: "60px",
                    lg: "60px",
                    md: "50px",
                    sm: "40px",
                    xs: "30px",
                  },
                  // height: "60px",
                  height: {
                    xl: "60px",
                    lg: "60px",
                    md: "50px",
                    sm: "40px",
                  },
                  // width: "60px",
                  // height: "60px",
                }}
                src="/img/siteRabbi.svg"
                variant="rounded"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column ",
              }}
            >
              <Typography>24 </Typography>
              <Typography
                sx={{
                  color: "#DAE7DF",
                }}
              >
                Sites
              </Typography>
            </Box>
          </Box>




          <Box                                                                // 2nd icon  .....Ajai
            sx={{
              display: "flex",
              flexDirection: "row ",
              alignItems: "center",
              justifyContent: "center",
              // gap: "15px",
              gap: {
                xl: "15px",
                lg: "15px",
                md: "10px",
                sm: "6px",
                xs: "2px",
              },
            }}
          >
            <Box>
              <Avatar
                sx={{
                  padding: 1,
                  bgcolor: "#2d2d2dff",
                  backdropFilter: "blur(15px)",
                  width: {
                    xl: "60px",
                    lg: "60px",
                    md: "50px",
                    sm: "40px",
                    xs: "30px",
                  },
                  // height: "60px",
                  height: {
                    xl: "60px",
                    lg: "60px",
                    md: "50px",
                    sm: "40px",
                  },
                }}
                src="/img/foot.svg"
                variant="rounded"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column ",
              }}
            >
              <Typography>234.9K</Typography>
              <Typography
                sx={{
                  color: "#DAE7DF",
                }}
              >
                Cluster
              </Typography>
            </Box>
          </Box>
          </Box>


                  <Box                                                   // 22222222222222222
                  sx={{ display:"flex", direction:"row",justifyContent: "space-around",
                    bgcolor:"blue"
                  // gap:{
                  //   xl: 20,
                  //   lg: 15,
                  //   md: 10,
                  //   sm: 6,
                  //   xs: 2
                  // }
                  }} 
                  >                                                             
          <Box                                                             //3rd icon....Ajai
            sx={{
              display: "flex",
              flexDirection: "row ",
              alignItems: "center",
              justifyContent: "center",
              // gap: "15px",
              gap: {
                xl: "15px",
                lg: "15px",
                md: "10px",
                sm: "6px",
                xs: "2px",
              },
            }}
          >
            <Box>
              <Avatar
                sx={{
                  padding: 1,
                  bgcolor: "#2d2d2dff",
                  backdropFilter: "blur(15px)",
                  // width: "60px",
                  // height: "60px",
                  width: {
                    xl: "60px",
                    lg: "60px",
                    md: "50px",
                    sm: "40px",
                    xs: "30px",
                  },
                  // height: "60px",
                  height: {
                    xl: "60px",
                    lg: "60px",
                    md: "50px",
                    sm: "40px",
                  },
                }}
                src="/img/Location.svg"
                variant="rounded"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column ",
              }}
            >
              <Typography>44</Typography>
              <Typography
                sx={{
                  color: "#DAE7DF",
                }}
              >
                Animals
              </Typography>
            </Box>
          </Box>

          <Box                                                                  // 4th Iocn...Ajai
            sx={{
              display: "flex",
              flexDirection: "row ",
              alignItems: "center",
              justifyContent: "center",
              gap: {
                xl: "15px",
                lg: "15px",
                md: "10px",
                sm: "6px",
                xs: "2px",
              },
            }}
          >
            <Box>
              <Avatar
                sx={{
                  padding: 1,
                  bgcolor: "#2d2d2dff",
                  backdropFilter: "blur(15px)",
                  // width: "60px",
                  // height: "60px",
                  width: {
                    xl: "60px",
                    lg: "60px",
                    md: "50px",
                    sm: "40px",
                    xs: "30px",
                  },
                  
                  // height: "60px",
                  height: {
                    xl: "60px",
                    lg: "60px",
                    md: "50px",
                    sm: "40px",
                  },
                }}
                src="/img/Enclosure.svg"
                variant="rounded"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column ",
              }}
            >
              <Typography>359</Typography>
              <Typography
                sx={{
                  color: "#DAE7DF",
                }}
              >
                Enclosures
              </Typography >   
            </Box>
          </Box>                                         

          </Box>        
        </Box>                                          main end */}