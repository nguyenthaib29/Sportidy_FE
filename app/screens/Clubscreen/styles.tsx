import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerItem: {
    backgroundColor: '#FFD700', // Màu nền vàng
    padding: 10,
    borderRadius: 20, // Bo góc
    flex: 1, 
    marginHorizontal: 5, // Khoảng cách giữa 2 item
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  clubInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  // ... (styles for club information)
  imagesContainer: {
    backgroundColor: '#FFEFD5', // Màu nền cam nhạt
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: '30%', // Điều chỉnh kích thước ảnh
    height: 80, 
  },
  joinButton: {
    backgroundColor: '#FF8C00', // Màu cam đậm
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  // ... (styles for join button, banner, bottom navigation)
});

export default styles;