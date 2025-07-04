import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IconButtonProps {
  onPress: () => void;
  color: string;
  icon?: any;
  size: number;
}
const IconButton: React.FC<IconButtonProps> = ({ onPress, icon, size, color }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
