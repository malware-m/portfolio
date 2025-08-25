export const terminalCommands = {
  welcome: [
    { text: '$ ./get_profile.sh', type: 'command', color: 'text-red-500' },
    { text: 'Cybersecurity professional with expertise in:', type: 'output' },
    { text: '> Web Pentesting', type: 'output' },
    { text: '> Network Pentesting', type: 'output' },
    { text: '> API Pentesting', type: 'output' },
    { text: '> Bug Bounty Hunting', type: 'output' },
    { text: '> LLM Pentesting', type: 'output' },
    { text: '$ echo $LOCATION', type: 'command', color: 'text-red-500' },
    { text: 'Lahore, Pakistan', type: 'output' },
    { text: '$ cat contact.txt', type: 'command', color: 'text-red-500' },
    { text: 'E: arslan.pentest@gmail.com', type: 'output' },
  ],
  skills: [
    { text: '$ ls -la /skills', type: 'command' },
    { text: 'total 42', type: 'output' },
    { text: 'drwxr-xr-x  2 malware wheel  68B Jul  8 13:37 cybersecurity/', type: 'output' },
    { text: 'drwxr-xr-x  2 malware wheel  68B Jul  8 13:37 Api/', type: 'output' },
    { text: 'drwxr-xr-x  2 malware wheel  68B Jul  8 13:37 programming/', type: 'output' },
    { text: 'drwxr-xr-x  2 malware wheel  68B Jul  8 13:37 certifications/', type: 'output' },
  ],
about: [
  { text: '$ whoami', type: 'command' },
  { text: 'Muhammad Arslan - Offensive Security Researcher & Pentester', type: 'output' },
  { text: '$ cat /etc/profile', type: 'command' },
  { 
    text: 'Experienced in network, web, and API penetration testing with a strong focus on identifying vulnerabilities and exploiting real-world threats. Skilled bug hunter and cybersecurity professional passionate about offensive security and threat research.', 
    type: 'output' 
  },
]
};
