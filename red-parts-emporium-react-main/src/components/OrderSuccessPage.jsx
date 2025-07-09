import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const OrderSuccessPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoToHomepage = () => {
    navigate('/'); 
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.checkmarkCircle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={styles.checkmark}
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1 style={styles.title}>Thank you</h1>
        <p style={styles.subtitle}>Your order has been been received</p>
        <button
          style={styles.goToHomepageButton}
          onClick={handleGoToHomepage} // Add onClick handler here
        >
          Go To Homepage
        </button>
      </div>

      {/* Order Summary Details */}
      <div style={styles.orderSummaryDetails}>
        <div style={styles.detailBox}>
          <span style={styles.detailLabel}>Order number:</span>
          <span style={styles.detailValue}><span style={styles.hash}>#</span>9478</span>
        </div>
        <div style={styles.detailBox}>
          <span style={styles.detailLabel}>Created At:</span>
          <span style={styles.detailValue}>Oct 19, 2020</span>
        </div>
        <div style={styles.detailBox}>
          <span style={styles.detailLabel}>Total:</span>
          <span style={styles.detailValue}>$1596.00</span>
        </div>
        <div style={styles.detailBox}>
          <span style={styles.detailLabel}>Payment Method:</span>
          <span style={styles.detailValue}>PayPal</span>
        </div>
      </div>

      {/* Product Table */}
      <div style={styles.productTable}>
        <div style={styles.tableHeader}>
          <span style={styles.productHeader}>PRODUCT</span>
          <span style={styles.quantityHeader}>QUANTITY</span>
          <span style={styles.totalHeader}>TOTAL</span>
        </div>
        <div style={styles.tableRow}>
          <div style={styles.productCell}>
            <img src="https://c1.wallpaperflare.com/preview/146/492/835/spark-plug-iridium-metal-glass.jpg" alt="Product" style={styles.productImage} />
            <div>
              <p style={styles.productName}>Brandix Spark Plug Kit ASR-400</p>
              <p style={styles.productOptions}>Color: True Red / Material: Aluminium</p>
            </div>
          </div>
          <span style={styles.quantityCell}>2</span>
          <span style={styles.totalCell}>$38.00</span>
        </div>
        <div style={styles.tableRow}>
          <div style={styles.productCell}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJ3xkokeP-fd8UHfLaX6otnodQlSK18m_-A&s" alt="Product" style={styles.productImage} />
            <div>
              <p style={styles.productName}>Brandix Brake Kit BDX-750Z370-S</p>
            </div>
          </div>
          <span style={styles.quantityCell}>1</span>
          <span style={styles.totalCell}>$224.00</span>
        </div>
        <div style={styles.tableRow}>
          <div style={styles.productCell}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydh6YMU2WHzN_j-Ou1y-V2G-BRrf1CFRsxA&s" alt="Product" style={styles.productImage} />
            <div>
              <p style={styles.productName}>Left Headlight Of Brandix Z54</p>
              <p style={styles.productOptions}>Color: Green</p>
            </div>
          </div>
          <span style={styles.quantityCell}>3</span>
          <span style={styles.totalCell}>$1047.00</span>
        </div>

        {/* Subtotal, Shipping, Tax */}
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Subtotal</span>
          <span style={styles.summaryValue}>$1309.00</span>
        </div>
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Shipping</span>
          <span style={styles.summaryValue}>$25.00</span>
        </div>
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Tax</span>
          <span style={styles.summaryValue}>$262.00</span>
        </div>

        {/* Total */}
        <div style={styles.totalRow}>
          <span style={styles.totalLabel}>Total</span>
          <span style={styles.totalFinalValue}>$1596.00</span>
        </div>
      </div>

      {/* Address Section */}
      <div style={styles.addressSection}>
        <div style={styles.addressCard}>
          <div style={styles.addressCardHeader}>
            <span style={styles.addressCardTitle}>Ryan Ford</span>
            <span style={styles.shippingAddressTag}>SHIPPING ADDRESS</span>
          </div>
          <p style={styles.addressText}>Random Federation</p>
          <p style={styles.addressText}>115302, Moscow</p>
          <p style={styles.addressText}>ul. Varshavskaya, 15-2-178</p>
          <p style={styles.addressLabel}>Phone Number</p>
          <p style={styles.addressValue}>38 972 588-42-36</p>
          <p style={styles.addressLabel}>Email Address</p>
          <p style={styles.addressValue}>stroyka@example.com</p>
        </div>
        <div style={styles.addressCard}>
          <div style={styles.addressCardHeader}>
            <span style={styles.addressCardTitle}>Ryan Ford</span>
            <span style={styles.billingAddressTag}>BILLING ADDRESS</span>
          </div>
          <p style={styles.addressText}>Random Federation</p>
          <p style={styles.addressText}>115302, Moscow</p>
          <p style={styles.addressText}>ul. Varshavskaya, 15-2-178</p>
          <p style={styles.addressLabel}>Phone Number</p>
          <p style={styles.addressValue}>38 972 588-42-36</p>
          <p style={styles.addressLabel}>Email Address</p>
          <p style={styles.addressValue}>stroyka@example.com</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  checkmarkCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#4CAF50', /* Green color for success */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 20px',
  },
  checkmark: {
    width: '40px',
    height: '40px',
  },
  title: {
    fontSize: '2.5em',
    color: '#333',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#666',
    marginBottom: '30px',
  },
  goToHomepageButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1em',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
  goToHomepageButtonHover: {
    backgroundColor: '#0056b3',
  },
  orderSummaryDetails: {
    display: 'flex',
    justifyContent: 'space-around',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    padding: '20px 0',
    marginBottom: '30px',
  },
  detailBox: {
    textAlign: 'center',
  },
  detailLabel: {
    display: 'block',
    fontSize: '0.9em',
    color: '#999',
    marginBottom: '5px',
  },
  detailValue: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    color: '#333',
  },
  hash: {
    color: '#007bff',
  },
  productTable: {
    marginBottom: '40px',
    border: '1px solid #eee',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  tableHeader: {
    display: 'flex',
    backgroundColor: '#f8f8f8',
    padding: '15px 20px',
    fontWeight: 'bold',
    borderBottom: '1px solid #eee',
  },
  productHeader: {
    flex: '3',
  },
  quantityHeader: {
    flex: '1',
    textAlign: 'center',
  },
  totalHeader: {
    flex: '1',
    textAlign: 'right',
  },
  tableRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 20px',
    borderBottom: '1px solid #eee',
  },
  tableRowLast: {
    borderBottom: 'none',
  },
  productCell: {
    flex: '3',
    display: 'flex',
    alignItems: 'center',
  },
  productImage: {
    width: '50px',
    height: '50px',
    marginRight: '15px',
    borderRadius: '4px',
    objectFit: 'cover',
  },
  productName: {
    margin: '0',
    fontWeight: 'bold',
    color: '#333',
  },
  productOptions: {
    margin: '0',
    fontSize: '0.85em',
    color: '#777',
  },
  quantityCell: {
    flex: '1',
    textAlign: 'center',
    color: '#555',
  },
  totalCell: {
    flex: '1',
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#333',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    borderTop: '1px solid #eee',
  },
  summaryLabel: {
    color: '#666',
  },
  summaryValue: {
    fontWeight: 'bold',
    color: '#333',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderTop: '1px solid #eee',
    fontWeight: 'bold',
    fontSize: '1.2em',
  },
  totalLabel: {
    color: '#333',
  },
  totalFinalValue: {
    color: '#000',
  },
  addressSection: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  addressCard: {
    flex: '1',
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  addressCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
  },
  addressCardTitle: {
    fontWeight: 'bold',
    fontSize: '1.1em',
    color: '#333',
  },
  shippingAddressTag: {
    backgroundColor: '#e6f7ff',
    color: '#007bff',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '0.8em',
    fontWeight: 'bold',
  },
  billingAddressTag: {
    backgroundColor: '#fffbe6',
    color: '#ffc107',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '0.8em',
    fontWeight: 'bold',
  },
  addressText: {
    margin: '5px 0',
    color: '#555',
    fontSize: '0.95em',
  },
  addressLabel: {
    marginTop: '15px',
    marginBottom: '5px',
    fontSize: '0.85em',
    color: '#999',
  },
  addressValue: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
  },
};

export default OrderSuccessPage;