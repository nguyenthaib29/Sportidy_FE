import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ClubScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <Text style={styles.headerText}>Available</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.headerText}>Your club</Text>
        </View>
      </View>

      {/* Club Information */}
      <View style={styles.clubInfo}>
        <Text style={styles.clubName}>SPORTIDY Night Club</Text>
        <Text style={styles.clubSlogan}>Chơi càng hay, nhậu càng say</Text>
        <Text style={styles.clubDate}>From: 14/10/2024</Text>
      </View>

      {/* Images */}
      <View style={styles.imagesContainer}>
        <View style={styles.imagesRow}>
    
          <Image source={require('../assets/images/logo1.png')} style={styles.image} /> {/* Chú thích: Tennis */}
        </View>
      </View>

      {/* Join Club Button */}
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinButtonText}>Join Club</Text>
      </TouchableOpacity>

      {/* Club Banner */}
      <Image source={require('../assets/images/clublogo.png')} style={styles.banner} />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Club</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClubScreen;