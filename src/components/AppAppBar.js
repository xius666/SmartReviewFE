import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import { useNavigate } from "react-router-dom";
import { EtherContext } from "../App";
import MouseOverPopover from "./Popover";

// const logoStyle = {
//   width: "140px",
//   height: "auto",
//   cursor: "pointer",
// };

function AppAppBar({ mode, toggleColorMode }) {
  const { provider, network, walletAddress } = React.useContext(EtherContext);
  const [open, setOpen] = React.useState(false);
  // const [address, setAddress] = React.useState("");
  const navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };
  // React.useEffect(() => {
  //   async function getAddress() {
  //     if (!provider) return;
  //     const signer = provider.getSigner();
  //     const address = await signer.getAddress();
  //     setAddress(address);
  //     return address;
  //   }

  //   getAddress();
  // }, [provider]);

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/");
                }}
              >
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ fontWeight: 300, fontSize: "1.5rem", margin: "12px" }}
                >
                  SmartReview
                </Typography>
              </MenuItem>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem
                  onClick={() => {
                    navigate("smartReviewHub");
                  }}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    SmartReview Hub
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("reviewHub");
                  }}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Review Hub
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("profile");
                  }}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Profile
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              {/* <Typography variant="body2" color="text.primary">
                {provider ? `Wallet Connected` : "Wallet Not Connected"}
              </Typography> */}
              <MouseOverPopover
                text={provider ? `Wallet Connected` : "Wallet Not Connected"}
                cotentText={
                  walletAddress
                    ? `connected to address: ${walletAddress} on ` + network
                    : "not connected to any wallet"
                }
                isSuccess={provider ? true : false}
              />
              {/* <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                // href="/material-ui/getting-started/templates/sign-in/"
                target="_blank"
              >
                Sign in
              </Button> */}
              {/* <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                // href="/material-ui/getting-started/templates/sign-up/"
                target="_blank"
              >
                Sign up
              </Button> */}
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>

                  <MenuItem
                    onClick={() => {
                      navigate("smartReviewHub");
                    }}
                  >
                    SmartReview Hub
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("reviewHub");
                    }}
                  >
                    Review Hub
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("profile");
                    }}
                  >
                    Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <MouseOverPopover
                      text={
                        provider ? `Wallet Connected` : "Wallet Not Connected"
                      }
                      cotentText={
                        walletAddress
                          ? `connected to address: ${walletAddress} on ` +
                            network
                          : "not connected to any wallet"
                      }
                      isSuccess={provider ? true : false}
                    />
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
