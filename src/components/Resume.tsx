import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { joinArrayWithComma } from '../lib/api';
import { info } from '../data/info';
import { exp } from '../data/experience';
import { project } from '../data/project';
import { skills } from '../data/skills';

// Define styles
const styles = StyleSheet.create({
  separator: {
    height: 10,
    borderLeft: '2px solid #999',
    margin: '0px 10px',
  },
  firstName: {
    fontWeight: 700,
  },
  lastName: {
    fontWeight: 300,
  },

  sectionTitle: {
    letterSpacing: 2,
    color: '#54afe4',
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontWeight: 'bold',
  },
});

const PDFGenerator = () => {
  return (
    <Document title='CV Intern ReactJS - Nguyen Phuc Vinh'
    author='VinhHandSome'   pageMode='fullScreen' style={{fontSize:13}}
    >
      <Page  size='A4' style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 900,
            padding: 40,
            marginTop: 50,
            backgroundColor: '#fff',
            margin: '0px auto 0px',
            borderRadius: 3,
            border: '1px solid #e5e7eb'
          }}>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View
              style={{
                marginBottom: 20,
                textTransform: 'uppercase',
                fontSize: 30,
                display:'flex',
                flexDirection:'row',
                gap:1
              }}>
              <Text style={styles.firstName}>{info.firstName}</Text>
              <Text style={styles.lastName}>{info.lastName}</Text>
            </View>
            <View style={{ marginBottom: 20, display:'flex', flexDirection:'row' }}>
              <Text style={{ color: '#999', fontWeight: 300 }}>
                Email:{' '}
                <Text style={{ color: '#333', fontWeight: 500 }}>
                  {' '}
                  {info.email}
                </Text>
              </Text>
              <Text style={styles.separator}></Text>
              <Text style={{ color: '#999', fontWeight: 300, marginLeft: 10 }}>
                Phone:{' '}
                <Text style={{ color: '#333', fontWeight: 500 }}>
                  {' '}
                  {info.phone}
                </Text>
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginRight: 10,
                  textDecoration: 'underline',
                }}>
                {info.position}
              </Text>
              <Text>{info.bio}</Text>
            </View>
          </View>
          <View
            style={{ display: 'flex', flexDirection: 'column', marginTop: 30 }}>
            <View
              style={{
                marginBottom: 40,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text style={styles.sectionTitle}>Experience</Text>
              <View>
                {exp.map((item, index) => {
                  if (item.tag === 'work') {
                    return (
                      <View
                        key={index}
                        style={{ display: 'flex' , justifyContent:'space-between'}}>
                        <View style={styles.left}>
                          <Text style={styles.name}>{item.company}</Text>
                          <Text>{item.websiteComapy}</Text>
                          <Text>{item.date}</Text>
                        </View>
                        <View style={styles.right}>
                          <Text style={styles.name}>{item.positon}</Text>
                          <Text>{item.responsibility}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </View>
            </View>
            <View style={{
                marginBottom: 40,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text style={styles.sectionTitle}>Education</Text>
              <View>
                {exp.map((item, index) => {
                  if (item.tag === 'learn') {
                    return (
                      <View
                        key={index}
                        style={{ display: 'flex', justifyContent:'space-between' }}>
                        <View style={styles.left}>
                          <Text style={styles.name}>{item.company}</Text>
                          <Text>{item.websiteComapy}</Text>
                          <Text>{item.date}</Text>
                        </View>
                        <View style={styles.right}>
                          <Text style={styles.name}>{item.positon}</Text>
                          <Text>{item.responsibility}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </View>
            </View>
            <View style={{display:'flex', flexDirection:'column'}}>
              <Text style={styles.sectionTitle}>Projects</Text>
              <View style={{display:'flex', flexDirection:'column'}}>
                {project.map((item) => {
                  return (
                    <View style={{padding:12, marginBottom:12, border:'1px solid #e5e7eb', borderRadius:10}}>
                      <View key={item.title}>
                        <View style={{display:'flex', flexDirection:'column', gap:5}}>
                          <Text style={styles.name}>{item.title}</Text>
                          <Text>{item.description}</Text>
                          <Text style={{color:'#4b5563'}}>{joinArrayWithComma(item.tags)}</Text>
                          <Text style={{color:'#6b7280'}}>{item.linkGit}</Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={{marginTop:30}}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={{padding:12, marginBottom:12, border:'1px solid #e5e7eb', borderRadius:10,display:'flex', flexDirection:'column', marginTop:5}}>
              <View style={{display:'flex' ,marginTop:10}}>
                <Text style={{fontWeight: 'bold', width:'20%'}}>FrontEnd:</Text>
                <View style={ { width:'80%', textAlign:'left'}}>
                  <Text>
                    {skills
                      .filter((item) => item.tag === 'fe')
                      .map((item) => item.name)
                      .join(', ')}
                  </Text>
                </View>
              </View>
              <View style={{display:'flex', marginTop:10}}>
                <Text style={{fontWeight: 'bold', width:'20%'}}>BackEnd:</Text>
                <View style={ { width:'80%', textAlign:'left'}}>
                  <Text >
                    {skills
                      .filter((item) => item.tag === 'be')
                      .map((item) => item.name)
                      .join(', ')}
                  </Text>
                </View>
              </View>
              </View>
            </View>
            <View style={{display:'flex', flexDirection:'column', marginTop: 40}}>
              <Text style={styles.sectionTitle}>Interests</Text>
              <View>
                <Text>Football, programming, and gaming.</Text>
              </View>
            </View>
          </View>
      </Page>
    </Document>
  );
};

export default PDFGenerator;
