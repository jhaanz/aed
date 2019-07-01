import React from 'react';
import { Text } from 'react-native';

export const Heading = ({ children }) => {
  return(
    <Text
      style={{
        color:"#4F8EF7",
        marginBottom: 15,
        fontSize: 34,
        fontFamily: "ProductSans-Regular"
      }}
    >
      { children }
    </Text>
  );
};

export const HeadingColor = ({ children, color }) => {
  return(
    <Text
      style={{
        color: color,
        marginBottom: 5,
        fontSize: 34,
        fontWeight: '400',
        fontFamily: "ProductSans-Regular"
      }}
    >
      { children }
    </Text>
  );
};

export const TextP = ({ children }) => {
  return(
    <Text
      style={{
        color:"#323232",
        marginBottom: 5,
        fontSize: 16,
        fontFamily: "ProductSans-Regular"
      }}
    >
      { children }
    </Text>
  );
};

export const TextPColor = ({ children, color }) => {
  return(
    <Text
      style={{
        color: color,
        marginBottom: 5,
        fontSize: 16,
        fontFamily: "ProductSans-Regular"
      }}
    >
      { children }
    </Text>
  );
};

export const Label = ({ children }) => {
  return(
    <Text
      style={{
        color:"#323232",
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "ProductSans-Bold"
      }}
    >
      { children }
    </Text>
  );
};

export const LabelColor = ({ children, color }) => {
  return(
    <Text
      style={{
        color: color,
        marginBottom: 5,
        fontSize: 16,
        fontFamily: "ProductSans-Bold",
        fontWeight: 'bold'
      }}
    >
      { children }
    </Text>
  );
};

export const Small = ({ children }) => {
  return(
    <Text
      style={{
        color:"#323232",
        marginBottom: 5,
        fontSize: 12,
        fontFamily: "ProductSans-Regular"
      }}
    >
      { children }
    </Text>
  );
};

export const SmallColor = ({ children, color }) => {
  return(
    <Text
      style={{
        color: color,
        marginBottom: 5,
        fontSize: 12,
        fontFamily: "ProductSans-Regular"
      }}
    >
      { children }
    </Text>
  );
};

export const SmallBold = ({ children }) => {
  return(
    <Text
      style={{
        color:"#323232",
        marginBottom: 5,
        fontSize: 12,
        fontFamily: "ProductSans-Bold",
        fontWeight: 'bold'
      }}
    >
      { children }
    </Text>
  );
};

export const SmallBoldColor = ({ children, color }) => {
  return(
    <Text
      style={{
        color: color,
        marginBottom: 5,
        fontSize: 12,
        fontFamily: "ProductSans-Bold"
      }}
    >
      { children }
    </Text>
  );
};

export const LabelBig = ({ children }) => {
  return(
    <Text
      style={{
        color:"#323232",
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: "ProductSans-Bold"
      }}
    >
      { children }
    </Text>
  );
};

export const LabelBigColor = ({ children, color }) => {
  return(
    <Text
      style={{
        color: color,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: "ProductSans-Bold"
      }}
    >
      { children }
    </Text>
  );
};

export const Paragraph = ({ children }) => {
  return(
    <Text
      style={{
        color:"#323232",
        marginBottom: 5,
        fontSize: 12,
        fontFamily: "ProductSans-Regular",
        textAlign: 'justify'
      }}
    >
      { children }
    </Text>
  );
};
