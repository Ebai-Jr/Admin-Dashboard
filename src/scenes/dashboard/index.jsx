import { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart"
import BarChart from "../../components/BarChart"
import GeographyChart from "../../components/GeographyChart"
import StatBox from "../../components/StatBox"
import ProgressCircle from "../../components/ProgressCircle"

//////////////////////////
////////////////////

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // State to handle modal visibility and content
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', subtitle: '', content: '' });

    // Function to handle modal opening
    const handleOpenModal = (content) => {
        setModalContent(content);
        setOpen(true);
    };

    // Function to handle modal closing
    const handleClose = () => {
        setOpen(false);
    };

    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
            <Button
                sx={{ 
                    backgroundColor: colors.blueAccent[700], 
                    color: colors.grey[100], 
                    fontSize: "14px", 
                    fontWeight: "bold", 
                    padding: "10px 20px",
                }}
            >
                <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                Download Reports
            </Button>
        </Box>
        </Box>

        {/* GRID AND CHARTS */}
        <Box
            display= "grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
        >
            {/* ROW 1 */}
            <Box 
                gridColumn="span 3"
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                onClick={() =>
                    handleOpenModal({
                        title: 'Emails Sent',
                        subtitle: '12,756',
                        content: 'This is the number of emails sent in the last month.'
                    })
                }
                sx={{ cursor: 'pointer' }}
            >
                <StatBox 
                    title="12,756"
                    subtitle="Emails Sent"
                    progress="0.75"
                    increase="+14%"
                    icon={
                        <EmailIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
            <Box 
                gridColumn="span 3"
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                onClick={() =>
                    handleOpenModal({
                        title: 'Sales Obtained',
                        subtitle: '452,756',
                        content: 'This is the total sales obtained.'
                    })
                }
                sx={{ cursor: 'pointer' }}
            >
                <StatBox 
                    title="452,756"
                    subtitle="Sales Obtained"
                    progress="0.5"
                    increase="+21%"
                    icon={
                        <PointOfSaleIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
            <Box 
                gridColumn="span 3"
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                onClick={() =>
                    handleOpenModal({
                        title: 'New Clients',
                        subtitle: '17,656',
                        content: 'This represents new clients added.'
                    })
                }
                sx={{ cursor: 'pointer' }}
            >
                <StatBox 
                    title="17,656"
                    subtitle="New Clients"
                    progress="0.30"
                    increase="+7%"
                    icon={
                        <PersonAddIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
            <Box 
                gridColumn="span 3"
                backgroundColor={colors.primary[400]} 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                onClick={() =>
                    handleOpenModal({
                        title: 'Traffic Inbound',
                        subtitle: '5,512,756',
                        content: 'This represents inbound traffic to the website.'
                    })
                }
                sx={{ cursor: 'pointer' }}
            >
                <StatBox 
                    title="5,512,756"
                    subtitle="Traffic Inbound"
                    progress="0.8"
                    increase="+58%"
                    icon={
                        <TrafficIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>

            {/* Modal */} 
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{modalContent.title}</DialogTitle>
                <DialogContent>
                    <Typography variant="h6">{modalContent.subtitle}</Typography>
                    <Typography>{modalContent.content}</Typography>
                </DialogContent>
            </Dialog>
                
        {/* ROW 2 */}
            <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Box 
                    mt="25px"
                    p="0 30px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Typography 
                            variant="h5" 
                            fontWeight="600" 
                            color={colors.grey[100]}
                        >
                            Revenue Generated
                        </Typography>
                        <Typography 
                            variant="h3" 
                            fontWeight="bold" 
                            color={colors.grey[100]}
                        >
                            $7,344,533
                        </Typography>
                    </Box>
                    
                    <Box>
                        <IconButton>
                            <DownloadOutlinedIcon
                                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                            />
                        </IconButton>
                    </Box>
                </Box>

                <Box height="250px" mt="-20px">
                    <LineChart isDashboard={true} />
                </Box>
                </Box>

                    {/* TRANSACTIONS */}
                <Box 
                    gridColumn="span 4" 
                    gridRow="span 2" 
                    backgroundColor={colors.primary[400]} 
                    overflow="auto"
                >
                    <Box 
                        display="flexx" 
                        justifyContent="space-between" 
                        alignItems="center" 
                        borderBottom={`4px solid ${colors.primary[500]}`} 
                        colors={colors.grey[100]} 
                        p="15px"
                    >
                        <Typography 
                            color={colors.grey[100]} 
                            variant="h5" 
                            fontWeight="600"
                        >
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map(( transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography 
                                    color={colors.greenAccent[500]} 
                                    variant="h5" 
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                            </Typography>
                            <Typography 
                                    color={colors.grey[100]}
                                >
                                    {transaction.user}
                            </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box>
                            <Box 
                                backgroundColor={colors.greenAccent[500]} 
                                p="5px 10px" 
                                borderRadius="4px"
                            >
                                {transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>
            
            {/* ROW 3 */}
            <Box 
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography variant="h5" fontWeight="600">
                    Campaign
                </Typography>
                <Box 
                    display="flex" 
                    flexDirection="column" 
                    alignItems="center" 
                    mt="25px"
                >
                    <ProgressCircle size="125" />
                    <Typography 
                        variant="h5" 
                        color={colors.greenAccent[500]} 
                        sx={{ mt: "15px"}}
                    >
                        $70,000 revenue generated
                    </Typography>
                    <Typography>Includes extra misc expenditures and costs</Typography>
                </Box>
            </Box>

            <Box 
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Typography 
                    variant="h5" 
                    fontWeight="600" 
                    sx={{ p: "30px 30px 0 30px" }}
                >
                    Sales Quantity
                </Typography>
                <Box 
                    height="250px"
                    mt="-20px"
                >
                    <BarChart isDashboard={true} />
                </Box>
            </Box>

            <Box 
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography 
                    variant="h5" 
                    fontWeight="600" 
                    sx={{ mb: "15px" }}
                >
                    Geography Based Traffic
                </Typography>
                <Box 
                    height="200px"
                >
                    <GeographyChart isDashboard={true} />
                </Box>
            </Box>

            {/*  */}
        </Box>
    </Box>
    );
}

export default Dashboard;