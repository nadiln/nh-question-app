import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const { width } = Dimensions.get('window');

export default function NavbarScreen() {

  const { isMenuOpen, searchText, handleNavigate, toggleMenu, setSearchText } = useNavbarScreen();

  const menuItems = [
    'Showcase',
    'Docs',
    'Blog',
    'Analytics',
    'Commerce',
    'Templates',
    'Enterprise',
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Main Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuIcon}>
            {isMenuOpen ?
              <>
              <Ionicons name='search' size={24} color="#333" />
              <Ionicons name="close" size={24} color="#333" />
              </>
              :
              <Ionicons name="menu" size={24} color="#333" />
            }
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoContainer}
          onPress={() => handleNavigate('Home')}
        >
          <Text style={styles.logoText}>AEON</Text>
        </TouchableOpacity>

        {/* Desktop Menu Items (Hidden on mobile, shown for completeness) */}
        <View style={styles.desktopMenu}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.desktopMenuItem}
              onPress={() => handleNavigate(item)}
            >
              <Text style={styles.desktopMenuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#666"
          />
        </View>
      </View>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <View style={styles.overlay}>
          <TouchableOpacity 
            style={styles.overlayBackground} 
            onPress={toggleMenu}
          />
          <View style={styles.sidebar}>
            {/* Sidebar Header */}
            <View style={styles.sidebarHeader}>
              <Text style={styles.sidebarTitle}>Menu</Text>
              <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Sidebar Menu Items */}
            <ScrollView style={styles.sidebarContent}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.sidebarMenuItem}
                  onPress={() => {
                    handleNavigate(item);
                  }}
                >
                  <Text style={styles.sidebarMenuText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Welcome to AEON</Text>
        
      </View>
    </SafeAreaView>
  );
};

//handles the logic for the Navbar screen
function useNavbarScreen(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleNavigate = (screenName: string) => {
    console.log(`Navigating to: ${screenName}`);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return {
    isMenuOpen,
    searchText,
    handleNavigate,
    toggleMenu,
    setSearchText,
    setIsMenuOpen,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#f8f9fa',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e5e9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuButton: {
    padding: 8,
    marginRight: 12,
  },
  menuIcon: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  logoContainer: {
    marginRight: 'auto',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  desktopMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    display: width > 768 ? 'flex' : 'none', // Hide on mobile
  },
  desktopMenuItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  desktopMenuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  searchContainer: {
    marginLeft: 'auto',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 200,
    backgroundColor: '#f8f9fa',
    fontSize: 14,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  overlayBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.75, // 75% of screen width
    maxWidth: 300,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e5e9',
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    fontSize: 24,
    color: '#666',
    fontWeight: 'bold',
  },
  sidebarContent: {
    flex: 1,
    paddingTop: 20,
  },
  sidebarMenuItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
  },
  sidebarMenuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  contentTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  contentSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
});
