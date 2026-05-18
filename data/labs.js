// IT Cert iOS — Scenario Labs
// Mobile-friendly: no real shell. Each lab = ordered steps.
// Step types:
//   - choice     : { type:'choice', prompt, options[], answer (idx), explain }
//   - command    : { type:'command', prompt, cmd, explain }  (display + memorize)
//   - note       : { type:'note', text }                     (concept callout)
//   - multiselect: { type:'multiselect', prompt, options[], answers[idx,...], explain }  (PBQ: select all)
//   - order      : { type:'order', prompt, items[], explain }  (PBQ: items must be picked in array order)
//   - fillblank  : { type:'fillblank', prompt, answer (string or [strings]), placeholder?, explain }  (PBQ: type exact)
//   - dragmatch  : { type:'dragmatch', prompt, pairs[{left,right}], explain }  (PBQ: match left -> right)
//
// User taps through. Wrong answer still shows explanation + proceeds.
// Progress tracked per lab.

const LABS = {

  // ============================================================
  // A+ Core 1 — hands-on scenarios mapped to 220-1101 domains
  // ============================================================
  aplus1: [
    {
      id: 'a1-lab1',
      title: 'Triage: Laptop Won\'t Power On',
      objective: '5.2 Troubleshoot common hardware problems',
      steps: [
        { type: 'note', text: 'User reports laptop will not turn on. AC adapter plugged in, no LEDs lit. You are at the desk.' },
        { type: 'choice', prompt: 'FIRST step?',
          options: ['Replace battery', 'Verify outlet has power', 'Reflash BIOS', 'Replace motherboard'],
          answer: 1,
          explain: 'Always start cheapest/quickest. Try a known-good outlet. Plug in a lamp or phone charger to confirm power.' },
        { type: 'choice', prompt: 'Outlet works. AC adapter LED is off when plugged in. NEXT?',
          options: ['Swap with known-good AC adapter', 'Open the laptop', 'Reinstall Windows', 'Tell user to buy new laptop'],
          answer: 0,
          explain: 'AC adapter is the cheapest part to swap. Confirm whether adapter or DC jack/charging board is the fault.' },
        { type: 'choice', prompt: 'New adapter — LED on adapter is solid, but laptop still dead. Next test?',
          options: ['Remove battery, hold power 30s, plug AC only, try power', 'Replace screen', 'Buy new RAM', 'Call vendor'],
          answer: 0,
          explain: 'Drain residual flea power. If laptop powers on without battery, battery is dead/shorted. If still nothing, suspect DC jack or board.' },
        { type: 'note', text: 'Exam tip: hardware tier-1 troubleshooting always = outlet → adapter → battery → board. CompTIA loves "FIRST step" questions.' }
      ]
    },
    {
      id: 'a1-lab2',
      title: 'Plan a Cable Run',
      objective: '2.1/2.2 Networking cabling',
      steps: [
        { type: 'note', text: 'Customer wants 10 Gbps NAS access from a workstation 78 meters away. No fiber available.' },
        { type: 'choice', prompt: 'Best cable?',
          options: ['Cat 5e', 'Cat 6', 'Cat 6a', 'RG-6 coax'],
          answer: 2,
          explain: 'Cat 6a handles 10 Gbps to full 100m. Cat 6 only 10 Gbps to ~55m. Cat 5e maxes at 1 Gbps.' },
        { type: 'choice', prompt: 'Both ends terminated to T568B. Result?',
          options: ['Crossover', 'Straight-through', 'Rollover', 'Loopback'],
          answer: 1,
          explain: 'Same standard both ends = straight-through (normal patch). MDI-X auto-handles old crossover cases on modern gear.' },
        { type: 'command', prompt: 'After install, verify link speed on Windows:', cmd: 'Get-NetAdapter | Select Name, LinkSpeed, MediaType',
          explain: 'LinkSpeed shows negotiated rate (10 Gbps if cable + NIC + switch all support it).' },
        { type: 'choice', prompt: 'LinkSpeed shows 1 Gbps. What\'s the most likely bottleneck?',
          options: ['Cable is bad', 'A device in path is 1 Gbps (NIC, switch port, or patch panel)', 'WiFi interference', 'IP misconfiguration'],
          answer: 1,
          explain: 'Negotiated rate = lowest common. Check every link: NIC, patch cable, jack, switch port, server NIC.' }
      ]
    },
    {
      id: 'a1-lab3',
      title: 'Add Memory to a Workstation',
      objective: '3.2 RAM installation',
      steps: [
        { type: 'note', text: 'Workstation has 2× 8 GB DDR4-2666 (16 GB total). Customer wants 32 GB.' },
        { type: 'choice', prompt: 'Customer brings home 2× 16 GB DDR4-3200 modules. Will they work?',
          options: ['Yes, max speed 3200', 'Yes but all four sticks run at 2666', 'No, generations mismatch', 'No, voltage mismatch'],
          answer: 1,
          explain: 'Mixed-speed DDR4 runs at slowest module\'s rated speed. Mixing capacities can also disable dual-channel; matched pairs preferred.' },
        { type: 'choice', prompt: 'Before opening case:',
          options: ['Unplug power, ground yourself with ESD strap', 'Spray compressed air on RAM slots', 'Run sfc /scannow first', 'Disable BIOS'],
          answer: 0,
          explain: 'ESD prevention is mandatory. Strap to chassis ground or use ESD mat. Never wear on live AC equipment.' },
        { type: 'choice', prompt: 'After install POSTs with only old 16 GB visible. Why?',
          options: ['New modules in wrong slots', 'BIOS needs update', 'Faulty stick', 'All three are possible'],
          answer: 3,
          explain: 'Try reseating, swap pairs, test each stick alone, check motherboard QVL for compatibility, update BIOS.' },
        { type: 'note', text: 'Exam tip: DDRx generations physically can\'t mix — different keying notch.' }
      ]
    },
    {
      id: 'a1-lab4',
      title: 'Diagnose Slow Wi-Fi in Office',
      objective: '2.4 Wireless networking',
      steps: [
        { type: 'note', text: '30-person office, single 2.4 GHz AP, channel 1. Users complain of slow speeds in afternoon.' },
        { type: 'choice', prompt: 'First diagnostic step?',
          options: ['Replace router', 'Run Wi-Fi analyzer to view channel utilization + interfering APs', 'Reset all clients', 'Reset DNS cache'],
          answer: 1,
          explain: 'Identify the actual interference / channel congestion before changing anything. Wi-Fi analyzer shows neighbor APs on each channel.' },
        { type: 'choice', prompt: 'Analyzer shows 6 other APs on channels 1, 3, 5. Best fix?',
          options: ['Move to channel 11', 'Move to channel 6', 'Add second AP on channel 1', 'Switch to 40 MHz width'],
          answer: 0,
          explain: '2.4 GHz only has 3 non-overlapping channels: 1, 6, 11. Channel 11 has least overlap with crowded 1-5 range.' },
        { type: 'choice', prompt: 'Office plans 5 GHz upgrade. Advantage vs 2.4 GHz?',
          options: ['Longer range', 'More non-overlapping channels, less interference', 'Penetrates walls better', 'Works on more devices'],
          answer: 1,
          explain: '5 GHz: 20+ channels, less interference, higher throughput. Shorter range and weaker through walls — placement matters.' }
      ]
    },
    {
      id: 'a1-lab5',
      title: 'Choose a Cloud Model for SMB',
      objective: '4.1 Cloud concepts',
      steps: [
        { type: 'note', text: 'Small accounting firm wants email + Office apps + file storage. No IT staff to manage servers.' },
        { type: 'choice', prompt: 'Best fit?',
          options: ['Build private cloud', 'IaaS (VMs in AWS)', 'PaaS', 'SaaS (Microsoft 365)'],
          answer: 3,
          explain: 'SaaS = finished apps, no infrastructure to manage. M365 covers email (Exchange Online), Office apps, OneDrive/SharePoint storage.' },
        { type: 'choice', prompt: 'Firm grows, hires a developer to host a custom client portal. They need a runtime managed for them. What model?',
          options: ['IaaS', 'PaaS', 'SaaS', 'FaaS only'],
          answer: 1,
          explain: 'PaaS — provider manages OS + runtime; developer just deploys code. Examples: Azure App Service, AWS Elastic Beanstalk.' }
      ]
    },
    {
      id: 'a1-pbq1',
      title: 'PBQ: Identify Connectors',
      objective: '3.1 Cable types — match connector to use',
      steps: [
        { type: 'note', text: 'PBQ-style: identify the right connector / cable for each scenario. Performance-based questions on the real exam look exactly like this.' },
        { type: 'dragmatch',
          prompt: 'Match each scenario with the correct cable / connector.',
          pairs: [
            { left: '1 Gbps Ethernet drop in office', right: 'Cat 6 UTP w/ RJ45' },
            { left: 'Cable modem broadband', right: 'RG-6 coax w/ F-type' },
            { left: 'Single-mode fiber transceiver', right: 'LC duplex' },
            { left: 'Cable TV / OTA tuner', right: 'Coax w/ F-type' },
            { left: 'Legacy analog phone line', right: 'Cat 3 UTP w/ RJ11' },
            { left: 'External NVMe SSD enclosure 40 Gbps', right: 'Thunderbolt 4 USB-C' }
          ],
          explain: 'Memorize: RJ45 = Ethernet (Cat 5e/6/6a/8). RJ11 = telephone. F-type = coax for cable. LC = small fiber connector dominating modern SFP+. Thunderbolt = 40+ Gbps over USB-C.' },
        { type: 'multiselect',
          prompt: 'Which cable types support 10 Gbps Ethernet to full 100 m?',
          options: ['Cat 5e', 'Cat 6', 'Cat 6a', 'Cat 7', 'Cat 8 (to 30 m only)', 'Multimode OM4'],
          answers: [2, 3],
          explain: 'Cat 6a = 10 Gbps @ 100 m. Cat 7 also 10 Gbps @ 100 m but rare in NA. Cat 6 = 10 Gbps but only to 55 m. Cat 8 = 25/40 Gbps but only 30 m. OM4 = fiber, NOT copper.' },
        { type: 'fillblank',
          prompt: '10 Gbps Ethernet over copper at 100 m — minimum category required (answer in form "Cat 6a"):',
          answer: ['cat 6a', 'cat6a', '6a'],
          placeholder: 'e.g., Cat 6a',
          explain: 'Cat 6a is the lowest TIA-rated category supporting 10 Gbps at the full 100 m channel.' },
        { type: 'order',
          prompt: 'Place these copper cable categories in INCREASING bandwidth capability:',
          items: ['Cat 5e (1 Gbps)', 'Cat 6 (10 Gbps@55m)', 'Cat 6a (10 Gbps@100m)', 'Cat 8 (40 Gbps@30m)'],
          explain: 'Cat 5e → Cat 6 → Cat 6a → Cat 8 by max throughput. Distance limits matter on the exam — Cat 6 caps short.' }
      ]
    },
    {
      id: 'a1-pbq2',
      title: 'PBQ: Subnet a /24 for 4 Departments',
      objective: '2.5 IP addressing — VLSM subnetting',
      steps: [
        { type: 'note', text: 'Given 192.168.10.0/24. Need 4 subnets, ~50 hosts each. Determine new prefix + subnet networks.' },
        { type: 'multiselect',
          prompt: 'Which prefix length produces 4 equal subnets from a /24?',
          options: ['/25', '/26', '/27', '/28'],
          answers: [1],
          explain: 'Borrow 2 bits from host (/24+2 = /26). 2² = 4 subnets. /26 = 64 addresses, 62 usable per subnet (meets 50-host need).' },
        { type: 'fillblank',
          prompt: 'Subnet mask in dotted decimal for /26:',
          answer: ['255.255.255.192'],
          placeholder: '255.x.x.x',
          explain: '/26 = 24 + 2 borrowed bits. Borrowed octet = 11000000 = 192.' },
        { type: 'fillblank',
          prompt: 'Block size (increment) of /26?',
          answer: ['64'],
          placeholder: 'Number',
          explain: '256 − 192 = 64. Subnets land at multiples of 64 in the last octet.' },
        { type: 'order',
          prompt: 'Place the four /26 subnet network addresses in order from first to last:',
          items: ['192.168.10.0/26', '192.168.10.64/26', '192.168.10.128/26', '192.168.10.192/26'],
          explain: 'Starting at .0, advance by block size 64 each time: .0, .64, .128, .192. Each subnet uses .1–.62 as usable hosts and ends at broadcast (.63, .127, .191, .255).' },
        { type: 'fillblank',
          prompt: 'Broadcast address of subnet 192.168.10.64/26?',
          answer: ['192.168.10.127'],
          placeholder: 'IP',
          explain: 'Next subnet starts at .128, so broadcast = .128 − 1 = .127.' }
      ]
    },
    {
      id: 'a1-pbq3',
      title: 'PBQ: Diagnose Wired Network',
      objective: '5.7 — troubleshoot networking',
      steps: [
        { type: 'note', text: 'User: "Wired Ethernet not working." You arrive at desk. Walk through diagnosis.' },
        { type: 'order',
          prompt: 'Apply bottom-up troubleshooting steps in the CORRECT layer order:',
          items: [
            '1. Check link light on NIC + switch port (L1)',
            '2. Confirm correct VLAN + no err-disable (L2)',
            '3. Verify ipconfig shows valid IP + gateway (L3)',
            '4. Test TCP port to a server (L4)',
            '5. Validate name resolution + app response (L7)'
          ],
          explain: 'Bottom-up = L1 → L2 → L3 → L4 → L7. Catch failures cheapest at the bottom.' },
        { type: 'fillblank',
          prompt: 'IP address 169.254.10.55 means what?',
          answer: ['apipa', 'automatic private ip addressing'],
          placeholder: 'Acronym',
          explain: 'APIPA — Automatic Private IP Addressing. Indicates DHCP could not reach a server. Check DHCP relay / VLAN / DHCP service.' },
        { type: 'multiselect',
          prompt: 'Tools that locate which wall jack a closet port matches:',
          options: ['Tone generator + probe', 'Cable tester (continuity)', 'Multimeter', 'OTDR', 'LLDP / CDP neighbor lookup'],
          answers: [0, 4],
          explain: 'Tone generator ("fox + hound") audibly identifies the cable end-to-end. LLDP/CDP on a managed switch reports the wall jack ID if configured.' },
        { type: 'choice',
          prompt: 'Workstation shows 1 Gbps link, but throughput tests at 95 Mbps. Most likely cause?',
          options: ['Bad NIC driver', 'Duplex mismatch (one side half)', 'Cat 5 cable in path / split pair', 'Misconfigured DNS'],
          answer: 2,
          explain: 'Link negotiates at 1 Gbps but a Cat 3/5 patch in the chain, or a split-pair termination, drops effective throughput to ~100 Mbps. Replace + recertify with a cable certifier.' }
      ]
    }
  ],

  // ============================================================
  // A+ Core 2 — 220-1102
  // ============================================================
  aplus2: [
    {
      id: 'a2-lab1',
      title: 'Ransomware Hit — Triage',
      objective: '2.4 / 3.3 Malware response',
      steps: [
        { type: 'note', text: 'User opens email attachment. Files now have .lockd extension; desktop note demands BTC payment.' },
        { type: 'choice', prompt: 'CompTIA malware response step 1?',
          options: ['Pay ransom to recover fast', 'Identify and research the malware', 'Quarantine the infected system (disconnect from network)', 'Reimage immediately'],
          answer: 2,
          explain: 'CompTIA 7-step malware response: 1) Investigate symptoms, 2) Quarantine, 3) Disable System Restore, 4) Remediate (update, scan), 5) Schedule scans & updates, 6) Enable System Restore, 7) Educate user. Quarantine prevents spread.' },
        { type: 'choice', prompt: 'After quarantine, NEXT step?',
          options: ['Disable System Restore so malware can\'t hide in restore points', 'Re-enable wireless', 'Sign user back in', 'Plug into corporate LAN'],
          answer: 0,
          explain: 'Disable System Restore (Windows) before remediation; otherwise malware can restore itself from a tainted restore point.' },
        { type: 'choice', prompt: 'Backups exist from yesterday. Best recovery?',
          options: ['Pay ransom anyway', 'Wipe and restore from clean backup', 'Try free decryptor only', 'Trust attacker decryption tool'],
          answer: 1,
          explain: 'Wipe + restore from clean offline backup is gold standard. 3-2-1 backup rule pays off here.' },
        { type: 'note', text: 'Educate user: do NOT open unsolicited attachments. Add to email phishing simulation training.' }
      ]
    },
    {
      id: 'a2-lab2',
      title: 'AD User Locked Out Repeatedly',
      objective: '2.6 Identity / 3.1 Windows tools',
      steps: [
        { type: 'note', text: 'User reports being locked out 3× per day. Has not changed password. Has phone + tablet + laptop.' },
        { type: 'choice', prompt: 'Most likely cause?',
          options: ['Failed brute force attack', 'Cached password on a phone/tablet after recent password change', 'Network outage', 'AD database corruption'],
          answer: 1,
          explain: 'Most common cause — phone\'s mail app or VPN client has old password and keeps retrying.' },
        { type: 'command', prompt: 'Find which device sent failed logon attempt — on the DC, check Security log Event ID 4625. Source workstation field shows origin.',
          cmd: 'Get-WinEvent -FilterHashtable @{LogName=\'Security\'; Id=4625; StartTime=(Get-Date).AddHours(-1)} | Select TimeCreated, @{n=\'User\';e={$_.Properties[5].Value}}, @{n=\'Source\';e={$_.Properties[19].Value}}',
          explain: 'Event 4625 = failed logon. Workstation/source field reveals device sending bad creds.' },
        { type: 'choice', prompt: 'Logs show source = user\'s iPhone. Fix?',
          options: ['Wipe phone', 'Update password in phone\'s mail/VPN app and remove stale profile', 'Disable account', 'Reset all of AD'],
          answer: 1,
          explain: 'Stale credential on a single device. Update in that app/profile and lockouts stop.' }
      ]
    },
    {
      id: 'a2-lab3',
      title: 'Permissions: Shared vs NTFS',
      objective: '2.6 Security best practices',
      steps: [
        { type: 'note', text: 'Folder \\\\fs01\\Projects. Share perms: Everyone = Full Control. NTFS perms: Domain Users = Read.' },
        { type: 'choice', prompt: 'What can a Domain User do?',
          options: ['Full Control', 'Modify', 'Read only', 'Nothing'],
          answer: 2,
          explain: 'When share + NTFS both apply, MOST RESTRICTIVE wins. Share grants Full but NTFS limits to Read → effective = Read.' },
        { type: 'choice', prompt: 'Add user Alice via NTFS as Modify. Alice also in a group that has Deny Write. What can Alice do?',
          options: ['Full Modify', 'Read only — Deny overrides Allow', 'No access', 'Write but not Read'],
          answer: 1,
          explain: 'NTFS Deny always overrides Allow. Even explicit Allow Modify is blocked by group Deny Write.' },
        { type: 'note', text: 'Rule: combine permissions across groups → take Allow union → apply Deny rules → most restrictive vs Share permission.' }
      ]
    },
    {
      id: 'a2-lab4',
      title: 'Windows Boot Failure',
      objective: '3.1 Troubleshoot OS',
      steps: [
        { type: 'note', text: 'After power loss, PC shows: "BOOTMGR is missing".' },
        { type: 'choice', prompt: 'Boot into WinRE. Best first command?',
          options: ['format C:', 'bootrec /fixmbr', 'sfc /scannow', 'chkdsk /f'],
          answer: 1,
          explain: 'bootrec /fixmbr rewrites the master boot record. Often paired with /fixboot and /rebuildbcd.' },
        { type: 'command', prompt: 'Full boot repair sequence:', cmd: 'bootrec /fixmbr\nbootrec /fixboot\nbootrec /scanos\nbootrec /rebuildbcd',
          explain: 'On UEFI/GPT systems, may need: bcdboot C:\\Windows /s S: /f UEFI (where S: is mounted ESP).' },
        { type: 'choice', prompt: 'Still won\'t boot. Disk healthy. Next?',
          options: ['Reinstall Windows on same partition with "Keep my files"', 'Reformat without backup', 'Replace CPU', 'Replace RAM'],
          answer: 0,
          explain: 'In-place reset preserves user files. Always ensure backup exists before any destructive step.' }
      ]
    },
    {
      id: 'a2-lab5',
      title: 'Suspicious Phishing Call',
      objective: '2.4 Social engineering',
      steps: [
        { type: 'note', text: 'User receives a call: caller says "I\'m from IT, your account is locked, give me your password to unlock."' },
        { type: 'choice', prompt: 'Attack type?',
          options: ['Phishing', 'Vishing', 'Whaling', 'Tailgating'],
          answer: 1,
          explain: 'Vishing = voice phishing. Phishing is email-based. Whaling targets executives.' },
        { type: 'choice', prompt: 'Correct user response?',
          options: ['Give password (caller said it\'s IT)', 'Hang up and report through verified IT channel', 'Tell them only the username', 'Email password instead'],
          answer: 1,
          explain: 'Real IT never asks for your password. Always verify by calling the helpdesk on a number you trust.' }
      ]
    }
  ],

  // ============================================================
  // Network+ — N10-009
  // ============================================================
  netplus: [
    {
      id: 'n-lab1',
      title: 'Subnet a /24 for Four Departments',
      objective: '1.4 IP addressing',
      steps: [
        { type: 'note', text: '192.168.10.0/24 must split into 4 equal subnets for 4 departments.' },
        { type: 'choice', prompt: 'Which mask?',
          options: ['/25', '/26', '/27', '/28'],
          answer: 1,
          explain: '4 subnets need 2 borrowed bits → /24 + 2 = /26. Each subnet has 64 addresses (62 usable).' },
        { type: 'choice', prompt: 'Subnet boundaries (last octet)?',
          options: ['.0  .32  .64  .96', '.0  .64  .128  .192', '.0  .128  .192  .255', '.0  .16  .32  .48'],
          answer: 1,
          explain: '/26 increment = 64. Subnets: .0/26, .64/26, .128/26, .192/26.' },
        { type: 'choice', prompt: 'Usable hosts per subnet?',
          options: ['64', '62', '32', '30'],
          answer: 1,
          explain: '2^6 = 64 addresses, minus network + broadcast = 62 usable.' }
      ]
    },
    {
      id: 'n-lab2',
      title: 'Trace Connectivity Failure',
      objective: '5.5 Troubleshoot network issues',
      steps: [
        { type: 'note', text: 'User cannot reach internal server 10.50.5.20. Can reach default gateway. Server is up.' },
        { type: 'command', prompt: 'Diagnostic path:', cmd: 'ping 10.50.5.20\ntracert 10.50.5.20\nping <gateway>\nipconfig /all',
          explain: 'Test reachability layer by layer. tracert shows where path breaks.' },
        { type: 'choice', prompt: 'tracert stops at the gateway. ping to gateway works. Likely cause?',
          options: ['Bad NIC', 'Routing issue past gateway (no route to 10.50.5.0)', 'DNS down', 'User typo'],
          answer: 1,
          explain: 'Reachable to gateway but tracert dies there = gateway lacks route to destination subnet, or ACL blocks it.' },
        { type: 'choice', prompt: 'Check gateway routing table. Best command on a Cisco router?',
          options: ['show running-config', 'show ip route', 'show interfaces', 'show vlan'],
          answer: 1,
          explain: '`show ip route` lists routing table entries. Look for the destination subnet.' }
      ]
    },
    {
      id: 'n-lab3',
      title: 'VLAN + Trunk Setup',
      objective: '2.1 Switching technologies',
      steps: [
        { type: 'note', text: 'Two switches connect via one port. VLANs 10 (Data) and 20 (Voice) must flow.' },
        { type: 'choice', prompt: 'Inter-switch port mode?',
          options: ['Access VLAN 1', 'Trunk (802.1Q)', 'Routed', 'EtherChannel only'],
          answer: 1,
          explain: 'Trunk port tags frames with VLAN ID (802.1Q) so multiple VLANs cross one link.' },
        { type: 'command', prompt: 'Cisco trunk port config:', cmd: 'interface Gi0/24\n switchport trunk encapsulation dot1q\n switchport mode trunk\n switchport trunk allowed vlan 10,20\n switchport trunk native vlan 99',
          explain: 'Native VLAN should be unused VLAN (not 1) to mitigate VLAN hopping (double-tagging attack).' },
        { type: 'choice', prompt: 'PCs in VLAN 10 cannot reach PCs in VLAN 20. Reason?',
          options: ['Trunk wrong', 'VLANs are isolated by default; need inter-VLAN routing (router-on-stick or L3 switch)', 'STP loop', 'Wrong cable'],
          answer: 1,
          explain: 'VLANs = separate L2 broadcast domains. To cross, you need a Layer 3 device with subinterfaces or SVIs.' }
      ]
    },
    {
      id: 'n-lab4',
      title: 'Wireless: 802.1X / RADIUS',
      objective: '4.1 Wireless security',
      steps: [
        { type: 'note', text: 'Replace WPA2-PSK Wi-Fi with WPA2-Enterprise for stronger auth.' },
        { type: 'choice', prompt: 'Authentication framework?',
          options: ['CHAP', 'PAP', '802.1X with RADIUS', 'Kerberos directly'],
          answer: 2,
          explain: '802.1X carries EAP between supplicant (client) and authenticator (AP/switch) → RADIUS server validates.' },
        { type: 'choice', prompt: 'Most secure EAP method (mutual auth, no password)?',
          options: ['EAP-MD5', 'EAP-TLS (certificates both sides)', 'PEAP-MSCHAPv2', 'LEAP'],
          answer: 1,
          explain: 'EAP-TLS = certificate auth client AND server. No password transmitted. Best deployment requires PKI.' },
        { type: 'choice', prompt: 'Mac user can\'t join after deployment. Common cause?',
          options: ['No 5 GHz support', 'Server certificate not trusted by client', 'Cable issue', 'WPA3 only'],
          answer: 1,
          explain: 'Client must trust the RADIUS server cert (or CA). Push CA cert via MDM/profile, or instruct user to accept.' }
      ]
    },
    {
      id: 'n-lab5',
      title: 'Spanning Tree Loop Diagnosis',
      objective: '2.3 Switching protocols',
      steps: [
        { type: 'note', text: 'After cabling change, network is sluggish. CPU on switches very high. Traffic counters extreme.' },
        { type: 'choice', prompt: 'Most likely cause?',
          options: ['DDoS attack', 'Layer 2 loop with no/disabled STP', 'IP conflict', 'Bad SFP'],
          answer: 1,
          explain: 'Symptoms = broadcast storm. STP should block redundant paths; if disabled or BPDUs filtered, loop forms.' },
        { type: 'command', prompt: 'Verify STP on Cisco:', cmd: 'show spanning-tree summary\nshow spanning-tree vlan 1',
          explain: 'Confirm STP enabled, root bridge elected, no Blocked ports lost.' },
        { type: 'choice', prompt: 'Edge ports going to PCs should have which feature to skip listening/learning?',
          options: ['BPDU guard', 'PortFast', 'Root guard', 'UDLD'],
          answer: 1,
          explain: 'PortFast moves ports straight to forwarding for end devices. PAIR with BPDU guard to block accidental switch plug-ins.' }
      ]
    }
  ],

  // ============================================================
  // Security+ — SY0-701
  // ============================================================
  secplus: [
    {
      id: 's-lab1',
      title: 'Phishing Email Triage',
      objective: '2.2 Indicators / 4.4 Incident response',
      steps: [
        { type: 'note', text: 'CFO receives email from "CEO" asking for wire transfer. Sender domain looks slightly off.' },
        { type: 'choice', prompt: 'Attack name?',
          options: ['Spear phishing', 'Whaling (BEC)', 'Smishing', 'Vishing'],
          answer: 1,
          explain: 'Targeting executive via spoofed CEO = Business Email Compromise / whaling.' },
        { type: 'choice', prompt: 'Email headers show SPF=fail, DKIM=none, DMARC=quarantine. What should email server do?',
          options: ['Deliver normally', 'Quarantine per DMARC policy', 'Bounce', 'Forward to attacker'],
          answer: 1,
          explain: 'DMARC enforces the action when SPF/DKIM fail. quarantine = junk folder; reject = bounce.' },
        { type: 'choice', prompt: 'CFO clicked the wire request before noticing. NEXT step?',
          options: ['Wait and hope', 'Contact bank immediately to recall + start IR per playbook + preserve evidence', 'Email attacker to verify', 'Delete email to hide it'],
          answer: 1,
          explain: 'Time-critical: bank recall window is short. Start IR. Preserve all evidence for forensics + insurance.' }
      ]
    },
    {
      id: 's-lab2',
      title: 'Configure MFA + Conditional Access',
      objective: '1.2 IAM / 4.1 Operations',
      steps: [
        { type: 'note', text: 'Cloud tenant has admin accounts using only passwords. Add MFA + risk-based conditions.' },
        { type: 'choice', prompt: 'Two factors that count as MFA?',
          options: ['Password + PIN', 'Password + authenticator app code', 'Password + secret question', 'Username + password'],
          answer: 1,
          explain: 'MFA needs DIFFERENT factor categories. Password = know. App code = have. PIN/secret-question = same category as password.' },
        { type: 'choice', prompt: 'Strongest MFA factor?',
          options: ['SMS code', 'Authenticator TOTP app', 'FIDO2 hardware key (phishing-resistant)', 'Email link'],
          answer: 2,
          explain: 'SMS = vulnerable to SIM swap. TOTP better but phishable. FIDO2/WebAuthn = phishing-resistant (origin bound).' },
        { type: 'choice', prompt: 'Conditional Access policy: block sign-in from impossible-travel patterns. Which control type?',
          options: ['Preventive', 'Detective', 'Deterrent', 'Compensating'],
          answer: 0,
          explain: 'Blocking before access = preventive. Detective only alerts after.' }
      ]
    },
    {
      id: 's-lab3',
      title: 'IR: Compromised Workstation',
      objective: '4.4 Incident response phases',
      steps: [
        { type: 'note', text: 'SIEM alert: workstation contacting known C2 IP. User is on it now.' },
        { type: 'choice', prompt: 'NIST IR phase you are in?',
          options: ['Preparation', 'Detection & Analysis', 'Containment, Eradication, Recovery', 'Post-Incident'],
          answer: 1,
          explain: 'Alert triggered = Detection. You analyze before deciding containment.' },
        { type: 'choice', prompt: 'Best containment for active malware?',
          options: ['Power off (lose RAM evidence)', 'Network isolation (disable port / VLAN quarantine) and capture RAM image FIRST', 'Reimage immediately', 'Tell user to keep working'],
          answer: 1,
          explain: 'Capture volatile evidence (RAM, network state) BEFORE losing it. Order of volatility: registers → RAM → swap → disk.' },
        { type: 'choice', prompt: 'Forensics: hash the disk image to:',
          options: ['Encrypt the evidence', 'Prove integrity (matching hash later = unaltered)', 'Compress for storage', 'Detect malware'],
          answer: 1,
          explain: 'Hash before AND after acquisition; defense at trial that evidence not tampered.' }
      ]
    },
    {
      id: 's-lab4',
      title: 'Vulnerability Scan Workflow',
      objective: '4.3 Vulnerability management',
      steps: [
        { type: 'note', text: 'Nessus scan returns 1,200 findings on 50 servers.' },
        { type: 'choice', prompt: 'Prioritize by:',
          options: ['Alphabetical', 'CVSS base × exploitability + asset criticality + exposure', 'Most recent CVE only', 'Random sample'],
          answer: 1,
          explain: 'Risk-based prioritization: a Critical CVSS on internal lab box may be lower priority than a Medium on an Internet-facing prod server.' },
        { type: 'choice', prompt: 'CVSS 9.8 critical on internet-facing server, no patch yet. Best compensating control?',
          options: ['Ignore', 'Add WAF rule, IPS signature, network ACL to restrict source IPs, monitor closely', 'Disable logging', 'Bring more servers online'],
          answer: 1,
          explain: 'Mitigate exposure until patch lands. Compensating controls buy time.' },
        { type: 'note', text: 'False positives must be validated (manual test or fewer-noise scan), not silently dismissed.' }
      ]
    },
    {
      id: 's-lab5',
      title: 'Encrypt Data at Rest + In Transit',
      objective: '3.1 Architecture / 1.4 Cryptography',
      steps: [
        { type: 'note', text: 'Customer database holds PII. Compliance: encrypt at rest AND in transit.' },
        { type: 'choice', prompt: 'At-rest options?',
          options: ['TDE (Transparent Data Encryption) + full-disk encryption (BitLocker / LUKS)', 'Hashing only', 'Base64 encoding', 'Compression'],
          answer: 0,
          explain: 'TDE encrypts data files; FDE protects offline disks. Hashing/encoding are NOT encryption.' },
        { type: 'choice', prompt: 'In-transit:',
          options: ['Plain HTTP', 'TLS 1.2+ with valid cert; disable old SSL/TLS versions', 'FTP', 'Telnet'],
          answer: 1,
          explain: 'TLS 1.2/1.3 required by modern compliance. Disable SSLv3, TLS 1.0, 1.1. Use strong ciphers (forward secrecy).' },
        { type: 'choice', prompt: 'Customer wants control over keys (audit, rotation, revoke). What?',
          options: ['Provider-managed keys', 'CMK / BYOK with HSM-backed KMS', 'Plaintext keys in code', 'No keys'],
          answer: 1,
          explain: 'Customer-Managed Keys give you lifecycle control. Audit usage via cloud audit logs.' }
      ]
    }
  ],

  // ============================================================
  // Linux+ — XK0-005
  // ============================================================
  linuxplus: [
    {
      id: 'l-lab1',
      title: 'Onboard a New Sysadmin',
      objective: '1.1 / 1.2 User management',
      steps: [
        { type: 'note', text: 'Add user "alice", in sudoers, with bash shell, SSH key auth only.' },
        { type: 'command', prompt: 'Create user:', cmd: 'sudo useradd -m -s /bin/bash alice\nsudo passwd alice\nsudo usermod -aG sudo alice    # Debian/Ubuntu\n# OR: sudo usermod -aG wheel alice  # RHEL/CentOS',
          explain: '-m creates home dir. -aG appends to group (forget -a = wipe out other memberships!).' },
        { type: 'command', prompt: 'Add SSH key from your workstation:', cmd: 'ssh-copy-id alice@server\n# or manually: ~/.ssh/authorized_keys on server, 600 perms',
          explain: 'Permissions: ~/.ssh = 700, authorized_keys = 600. SSHD rejects looser perms.' },
        { type: 'command', prompt: 'Disable password SSH auth:', cmd: 'sudo sed -i \'s/^#\\?PasswordAuthentication.*/PasswordAuthentication no/\' /etc/ssh/sshd_config\nsudo systemctl restart sshd',
          explain: 'TEST in a second SSH session BEFORE closing your current one — lockout risk.' },
        { type: 'choice', prompt: 'Alice runs sudo and gets "alice is not in the sudoers file". Cause?',
          options: ['Wrong shell', 'usermod ran without -a so previous groups dropped, OR group cache not refreshed', 'Selinux', 'Cron daemon'],
          answer: 1,
          explain: 'New group membership requires re-login (or `newgrp` / SSH out and back). Also check distro sudo group name (sudo vs wheel).' }
      ]
    },
    {
      id: 'l-lab2',
      title: 'Disk Filled — Find and Clean',
      objective: '4.1 Storage / 4.4 Troubleshooting',
      steps: [
        { type: 'note', text: 'Web server alerts: / partition at 98%.' },
        { type: 'command', prompt: 'Identify big consumers:', cmd: 'df -h\nsudo du -hx --max-depth=1 / | sort -h\nsudo du -hx --max-depth=1 /var | sort -h',
          explain: '-x stays on one filesystem. Walk down the largest dir each time.' },
        { type: 'choice', prompt: '/var/log/nginx/access.log is 50 GB. Best fix?',
          options: ['rm the file (process still has handle, space not freed)', 'truncate + configure logrotate', 'Reboot', 'Mount a USB drive'],
          answer: 1,
          explain: 'Removing an open file does NOT free space until the process is restarted. truncate -s 0 file or > file frees inline.' },
        { type: 'command', prompt: 'Truncate safely:', cmd: 'sudo truncate -s 0 /var/log/nginx/access.log\n# Permanent fix:\nsudo nano /etc/logrotate.d/nginx',
          explain: 'logrotate handles daily/size-based rotation and compression long-term.' },
        { type: 'choice', prompt: 'Disk still climbing. Find files deleted but held open:',
          options: ['lsof | grep deleted', 'find / -name deleted', 'ls -la /tmp', 'ps auxf'],
          answer: 0,
          explain: '`lsof | grep deleted` reveals open handles to unlinked files. Restart the holder to release.' }
      ]
    },
    {
      id: 'l-lab3',
      title: 'Service Won\'t Start',
      objective: '4.4 Troubleshooting',
      steps: [
        { type: 'note', text: '`systemctl start nginx` returns "failed".' },
        { type: 'command', prompt: 'Diagnostic ladder:', cmd: 'systemctl status nginx\nsudo journalctl -u nginx --since "10 min ago" --no-pager\nsudo nginx -t   # config syntax check\nsudo ss -tunlp | grep :80',
          explain: 'status shows recent log + exit code. journalctl gets full output. nginx -t validates config without starting. ss reveals port conflicts.' },
        { type: 'choice', prompt: 'Error: "bind() to 0.0.0.0:80 failed (98: Address already in use)". Cause?',
          options: ['Bad nginx binary', 'Another process holds port 80 (apache, old nginx, etc.)', 'SELinux denial', 'No internet'],
          answer: 1,
          explain: 'Port conflict. `sudo ss -tunlp | grep :80` reveals the holder. Stop it or change nginx port.' },
        { type: 'choice', prompt: 'Port free, but service fails with "Permission denied /var/log/nginx/error.log". RHEL system. Likely?',
          options: ['Disk full', 'SELinux preventing write', 'Bad shell', 'Wrong systemd target'],
          answer: 1,
          explain: 'On RHEL, SELinux denials are common. Check audit.log → `ausearch -m AVC -ts recent` and apply correct context with chcon/restorecon.' }
      ]
    },
    {
      id: 'l-lab4',
      title: 'Cron + Scripting Quick Job',
      objective: '5.1 Automation',
      steps: [
        { type: 'note', text: 'Need to back up /etc nightly to /backup/etc-YYYYMMDD.tar.gz, keep 14 days.' },
        { type: 'command', prompt: 'Backup script /usr/local/bin/etc-backup.sh:', cmd: '#!/usr/bin/env bash\nset -euo pipefail\nDATE=$(date +%Y%m%d)\ntar -czf /backup/etc-${DATE}.tar.gz /etc\nfind /backup -name "etc-*.tar.gz" -mtime +14 -delete',
          explain: 'set -euo pipefail = fail fast. find -mtime +14 -delete prunes anything older than 14 days.' },
        { type: 'command', prompt: 'Make executable + schedule:', cmd: 'sudo chmod +x /usr/local/bin/etc-backup.sh\nsudo crontab -e\n# add line:\n0 2 * * * /usr/local/bin/etc-backup.sh >>/var/log/etc-backup.log 2>&1',
          explain: '0 2 * * * = 02:00 every day. Append stdout+stderr to log so failures are visible.' },
        { type: 'choice', prompt: 'Cron job not running. First check?',
          options: ['Reboot', '`systemctl status cron` + log shows job ran but exited non-zero', 'Reinstall bash', 'Recompile kernel'],
          answer: 1,
          explain: 'Confirm cron is running, check log for execution and exit codes. Cron emails owner by default unless redirected.' }
      ]
    },
    {
      id: 'l-lab5',
      title: 'Firewall + SSH Hardening',
      objective: '3.1 Security',
      steps: [
        { type: 'note', text: 'New web server on the internet. Only HTTP/S and SSH allowed.' },
        { type: 'command', prompt: 'Ubuntu (ufw):', cmd: 'sudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow 22/tcp\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\nsudo ufw enable\nsudo ufw status verbose',
          explain: 'Always allow 22 BEFORE enabling, or lock yourself out.' },
        { type: 'command', prompt: 'RHEL (firewalld):', cmd: 'sudo firewall-cmd --add-service=ssh --permanent\nsudo firewall-cmd --add-service=http --permanent\nsudo firewall-cmd --add-service=https --permanent\nsudo firewall-cmd --reload',
          explain: '--permanent persists across reload. Without it, only runtime rule.' },
        { type: 'command', prompt: 'Install fail2ban for brute-force protection:', cmd: 'sudo apt install fail2ban -y\nsudo systemctl enable --now fail2ban\nsudo fail2ban-client status sshd',
          explain: 'fail2ban watches auth logs and bans offending IPs via iptables/nftables.' }
      ]
    }
  ],

  // ============================================================
  // Cloud+ — CV0-004
  // ============================================================
  cloudplus: [
    {
      id: 'c-lab1',
      title: 'Design HA Web App',
      objective: '1.2 / 2.4 Architecture / HA',
      steps: [
        { type: 'note', text: 'Web app must survive single-AZ failure with RTO 5 min, RPO 1 min.' },
        { type: 'choice', prompt: 'Compute tier strategy?',
          options: ['Single VM in one AZ', 'Auto-scaling group across 2+ AZs behind LB', 'Single dedicated host', 'Manual failover'],
          answer: 1,
          explain: 'Multi-AZ ASG behind LB = automated failover within minutes. Stateless app scales horizontally.' },
        { type: 'choice', prompt: 'Database tier?',
          options: ['Single DB instance', 'Managed DB with synchronous Multi-AZ replication', 'Async backup only', 'Local DB on each VM'],
          answer: 1,
          explain: 'Synchronous replication = RPO near-zero. AWS RDS Multi-AZ, Azure SQL zone-redundant, etc.' },
        { type: 'choice', prompt: 'For RPO of 1 min, what backup approach?',
          options: ['Daily snapshots only', 'Continuous backups / point-in-time recovery', 'Weekly tape', 'No backups (HA covers it)'],
          answer: 1,
          explain: 'HA ≠ backup. PITR / continuous backup covers logical corruption + ransomware that HA replicates. Test restores regularly.' }
      ]
    },
    {
      id: 'c-lab2',
      title: 'Reduce Cloud Bill 30%',
      objective: '1.3 / 5.2 FinOps',
      steps: [
        { type: 'note', text: 'Monthly bill $50k. CFO demands 30% reduction. You have current usage data.' },
        { type: 'choice', prompt: 'First action?',
          options: ['Cancel everything', 'Tag every resource by owner/app/env and analyze idle + oversized instances', 'Move to on-prem immediately', 'Buy reservations blindly'],
          answer: 1,
          explain: 'Visibility first. Tagging enables chargeback + finding waste (idle, oversized, abandoned).' },
        { type: 'choice', prompt: 'You find dev environments running 24/7. Best fix?',
          options: ['Increase size', 'Auto-shutdown nights/weekends via schedule', 'Move to spot instances only', 'Migrate to mainframe'],
          answer: 1,
          explain: 'Dev/test rarely needs 24/7. Schedule shutdown for ~70% savings. Spot also viable for stateless workloads.' },
        { type: 'choice', prompt: 'Steady-state prod workload runs same instance type 24/7 for years. Best discount?',
          options: ['Spot', '1-yr or 3-yr Reservations / Savings Plans', 'On-demand', 'Pay yearly upfront for on-demand'],
          answer: 1,
          explain: 'Reservations / Savings Plans = ~30-72% off vs on-demand for committed steady use.' }
      ]
    },
    {
      id: 'c-lab3',
      title: 'Container Deployment Pipeline',
      objective: '3.1 Deployment / Containers',
      steps: [
        { type: 'note', text: 'Deploy a Node.js app to Kubernetes with rolling updates.' },
        { type: 'command', prompt: 'Minimal manifest:', cmd: 'apiVersion: apps/v1\nkind: Deployment\nmetadata: { name: web }\nspec:\n  replicas: 3\n  selector: { matchLabels: { app: web } }\n  strategy: { type: RollingUpdate }\n  template:\n    metadata: { labels: { app: web } }\n    spec:\n      containers:\n      - name: app\n        image: myrepo/web:v1\n        ports: [{containerPort: 3000}]\n        readinessProbe: { httpGet: { path: /healthz, port: 3000 } }',
          explain: 'readinessProbe gates traffic until pod healthy. Rolling update default avoids downtime.' },
        { type: 'choice', prompt: 'Expose externally on cloud provider — which Service type?',
          options: ['ClusterIP', 'NodePort', 'LoadBalancer (provisions cloud LB)', 'Headless'],
          answer: 2,
          explain: 'LoadBalancer creates external LB with public IP automatically. For many apps via one LB, prefer Ingress + controller.' },
        { type: 'choice', prompt: 'Pod cannot reach external API after a NetworkPolicy was applied. Cause?',
          options: ['DNS down', 'Default-deny egress; need allow rule', 'Service is wrong type', 'Image bad'],
          answer: 1,
          explain: 'NetworkPolicies are deny by default once any policy attaches. Add an egress allow rule for needed destinations.' }
      ]
    },
    {
      id: 'c-lab4',
      title: 'Recover from Misconfigured S3 Public Bucket',
      objective: '4.1 Cloud security',
      steps: [
        { type: 'note', text: 'CSPM tool alerts: prod bucket has public read enabled. Contains customer files.' },
        { type: 'choice', prompt: 'FIRST step?',
          options: ['Make bucket private + enable Block Public Access at account level', 'Tweet about it', 'Delete the bucket', 'Ignore — it\'s low risk'],
          answer: 0,
          explain: 'Stop the bleed: remove public ACL/policy + enable account-level Block Public Access guard.' },
        { type: 'choice', prompt: 'Determine if data was downloaded by attackers — which log?',
          options: ['VPC flow logs only', 'S3 access logs / CloudTrail data events', 'EC2 system log', 'OS auth log'],
          answer: 1,
          explain: 'Enable S3 access logs / CloudTrail data events for object-level audit. If not enabled before incident, may need to assume worst.' },
        { type: 'choice', prompt: 'Long-term prevention?',
          options: ['IaC + policy-as-code (Terraform + OPA/Conftest), CSPM continuous monitoring, account-level Block Public Access', 'Hope', 'Manual review only', 'Disable cloud'],
          answer: 0,
          explain: 'Shift-left: catch misconfigs in CI; CSPM catches drift in prod.' }
      ]
    },
    {
      id: 'c-lab5',
      title: 'Multi-Region DR Drill',
      objective: '5.1 Operations / DR',
      steps: [
        { type: 'note', text: 'Practice failover from US-East to US-West.' },
        { type: 'choice', prompt: 'DR strategy with hot multi-region active-active provides:',
          options: ['Slowest recovery, cheapest', 'Lowest RTO and RPO, highest cost', 'No backups needed', 'Manual only'],
          answer: 1,
          explain: 'Active-active = no failover, just route. Cost = double infra. Used for critical workloads only.' },
        { type: 'choice', prompt: 'Cheaper "pilot light" DR is:',
          options: ['Full duplicate running constantly', 'Minimal core (DB replicas, AMIs) running; scale up on event', 'Backups only', 'On-prem failover'],
          answer: 1,
          explain: 'Pilot light = DB replicating + golden images ready. Scale compute on disaster. Slower RTO than warm standby but cheaper.' },
        { type: 'choice', prompt: 'After failover test, MOST important step?',
          options: ['Skip post-mortem', 'Document gaps, fix runbook, schedule next drill', 'Disable monitoring', 'Pay vendor'],
          answer: 1,
          explain: 'Untested DR is broken DR. Every drill must capture lessons + update runbook.' }
      ]
    }
  ],

  // ============================================================
  // AZ-900 — Azure Fundamentals
  // ============================================================
  az900: [
    {
      id: 'az-lab1',
      title: 'Resource Group Layout',
      objective: 'Azure architecture / governance',
      steps: [
        { type: 'note', text: 'New project: dev, staging, prod environments. Two regions. Cost tracked per environment.' },
        { type: 'choice', prompt: 'Best RG structure?',
          options: ['One RG for all resources', 'RG per environment per region (rg-dev-eus, rg-prod-eus, rg-prod-wus, etc.)', 'No RGs', 'One RG per resource'],
          answer: 1,
          explain: 'RG = lifecycle/cost/access boundary. Per env + per region simplifies cost reports, RBAC, and tear-downs.' },
        { type: 'choice', prompt: 'Apply policy "only allow eastus / westus regions" at:',
          options: ['Each resource', 'Each RG', 'Subscription or Management Group (inherits)', 'Tenant only'],
          answer: 2,
          explain: 'Policy at MG/Subscription cascades down. Less drift than per-RG.' },
        { type: 'choice', prompt: 'Prevent accidental delete of prod database:',
          options: ['CanNotDelete lock on the resource', 'ReadOnly lock', 'Both work the same', 'No locks available'],
          answer: 0,
          explain: 'CanNotDelete blocks delete but allows modify. ReadOnly blocks both delete and modify (use for stable assets).' }
      ]
    },
    {
      id: 'az-lab2',
      title: 'Estimate vs Track Cost',
      objective: 'Cost management',
      steps: [
        { type: 'note', text: 'Before deploy: estimate. After deploy: track. Both required.' },
        { type: 'choice', prompt: 'Estimate tool?',
          options: ['Cost Management', 'Pricing Calculator', 'Azure Advisor', 'Service Health'],
          answer: 1,
          explain: 'Pricing Calculator = pre-deploy. Cost Management = post-deploy actual.' },
        { type: 'choice', prompt: 'Set $10k/month budget alert at 80% — which tool?',
          options: ['Pricing Calculator', 'Cost Management → Budgets', 'Resource Health', 'Defender for Cloud'],
          answer: 1,
          explain: 'Cost Management Budgets fire actions at thresholds (email, webhook, automation).' },
        { type: 'choice', prompt: 'Azure Advisor recommends Reservations. Best for:',
          options: ['Spiky workloads', 'Steady-state 24/7 workloads with predictable size', 'Dev/test', 'Spot'],
          answer: 1,
          explain: 'Reservations give 1-yr or 3-yr commitment for big discount. Match steady-state usage.' }
      ]
    },
    {
      id: 'az-lab3',
      title: 'Secure Admin Access',
      objective: 'Identity / Entra ID',
      steps: [
        { type: 'note', text: 'Global Admin role passwords get leaked. Stop standing privilege.' },
        { type: 'choice', prompt: 'Best mitigation?',
          options: ['Just rotate passwords', 'Privileged Identity Management (PIM): just-in-time elevation with MFA + approval', 'Email password to each admin', 'Add more admins'],
          answer: 1,
          explain: 'PIM = no standing admin. Activate role on demand, time-bound, audited.' },
        { type: 'choice', prompt: 'Add risk-based controls (block impossible travel, require compliant device). Feature?',
          options: ['Azure Policy', 'Conditional Access', 'NSG', 'Resource lock'],
          answer: 1,
          explain: 'Conditional Access evaluates user/device/location/risk during sign-in.' },
        { type: 'choice', prompt: 'Hybrid scenario — on-prem AD users sign in to Microsoft 365. Sync tool?',
          options: ['Microsoft Entra Connect', 'AD Replication', 'DFSR', 'ConfigMgr'],
          answer: 0,
          explain: 'Entra Connect (formerly Azure AD Connect) syncs identities + password hashes / PHS, PTA, or federation.' }
      ]
    },
    {
      id: 'az-lab4',
      title: 'Connect On-Prem to Azure',
      objective: 'Networking',
      steps: [
        { type: 'note', text: 'Office has 200 users. Need persistent connection to Azure VNet.' },
        { type: 'choice', prompt: 'Encrypted tunnel over the public Internet — Azure service?',
          options: ['ExpressRoute', 'Site-to-Site VPN Gateway (IPsec)', 'Front Door', 'CDN'],
          answer: 1,
          explain: 'Site-to-Site VPN Gateway = IPsec tunnel. ExpressRoute is dedicated private circuit (faster, more expensive).' },
        { type: 'choice', prompt: 'Need 10 Gbps, lowest latency, predictable cost?',
          options: ['VPN Gateway', 'ExpressRoute', 'Internet only', 'Front Door'],
          answer: 1,
          explain: 'ExpressRoute carries no encryption by default at L3 — combine with IPsec if needed by compliance.' },
        { type: 'choice', prompt: 'Restrict resource access to private network only (no public IP):',
          options: ['Private Endpoints', 'NSG default deny', 'Resource lock', 'Azure DDoS'],
          answer: 0,
          explain: 'Private Endpoint puts a private IP for a PaaS service inside your VNet. Disables public access.' }
      ]
    }
  ],

  // ============================================================
  // PowerShell — admin scripting scenarios
  // ============================================================
  powershell: [
    {
      id: 'ps-lab1',
      title: 'Audit Stale AD Accounts',
      objective: 'Identity automation',
      steps: [
        { type: 'note', text: 'Find AD users not logged in 90+ days. Disable but don\'t delete.' },
        { type: 'command', prompt: 'Find stale users:', cmd: 'Import-Module ActiveDirectory\n$cutoff = (Get-Date).AddDays(-90)\nGet-ADUser -Filter * -Properties LastLogonDate, Enabled |\n  Where-Object { $_.Enabled -and ($_.LastLogonDate -lt $cutoff) } |\n  Select-Object SamAccountName, LastLogonDate |\n  Export-Csv .\\stale-users.csv -NoTypeInformation',
          explain: 'Replicate or pull LastLogon from each DC (LastLogonDate replicated; LastLogon attribute is per-DC non-replicated).' },
        { type: 'command', prompt: 'Review + then disable:', cmd: 'Import-Csv .\\stale-users.csv | ForEach-Object {\n  Disable-ADAccount -Identity $_.SamAccountName -WhatIf\n}\n# Drop -WhatIf when ready to execute.',
          explain: '-WhatIf simulates. Always run with -WhatIf first for destructive scripts.' },
        { type: 'choice', prompt: 'Why not Remove-ADUser?',
          options: ['Faster', 'Audit + reversibility — Disable keeps SID/permissions intact; deletion is hard to undo', 'It doesn\'t exist', 'Required by AD'],
          answer: 1,
          explain: 'Disable then move to "Disabled Users" OU. Delete after retention period; preserves audit trail and avoids orphaned permissions.' }
      ]
    },
    {
      id: 'ps-lab2',
      title: 'Bulk-Onboard via CSV',
      objective: 'User provisioning',
      steps: [
        { type: 'note', text: 'HR provides users.csv with FirstName, LastName, Department, Title.' },
        { type: 'command', prompt: 'Create accounts:', cmd: 'Import-Csv .\\users.csv | ForEach-Object {\n  $upn = ("{0}.{1}@contoso.com" -f $_.FirstName, $_.LastName).ToLower()\n  New-ADUser \\\n    -Name "$($_.FirstName) $($_.LastName)" \\\n    -GivenName $_.FirstName -Surname $_.LastName \\\n    -SamAccountName ("{0}{1}" -f $_.FirstName.Substring(0,1), $_.LastName).ToLower() \\\n    -UserPrincipalName $upn \\\n    -Department $_.Department -Title $_.Title \\\n    -AccountPassword (ConvertTo-SecureString "Welcome2026!" -AsPlainText -Force) \\\n    -ChangePasswordAtLogon $true \\\n    -Enabled $true \\\n    -Path "OU=NewHires,DC=contoso,DC=com"\n}',
          explain: 'Force password change on first logon. Default OU placement = NewHires for triage. Group membership added in next step.' },
        { type: 'choice', prompt: 'Secrets handling in scripts?',
          options: ['Hardcode passwords forever', 'Use SecretManagement module or Get-Credential at runtime', 'Email passwords plaintext', 'Disable password auth'],
          answer: 1,
          explain: 'Never embed plaintext secrets. Use SecretManagement, KMS/Key Vault, or interactive credential prompts.' }
      ]
    },
    {
      id: 'ps-lab3',
      title: 'Inventory All Windows Servers',
      objective: 'Reporting + Remoting',
      steps: [
        { type: 'note', text: 'Collect OS, RAM, free disk, BIOS, uptime across 200 servers into one CSV.' },
        { type: 'command', prompt: 'Run across fleet:', cmd: '$servers = Get-Content .\\servers.txt\nInvoke-Command -ComputerName $servers -ScriptBlock {\n  $os   = Get-CimInstance Win32_OperatingSystem\n  $bios = Get-CimInstance Win32_BIOS\n  $disk = Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3"\n  [PSCustomObject]@{\n    Server      = $env:COMPUTERNAME\n    OS          = $os.Caption\n    Version     = $os.Version\n    TotalRAM_GB = [math]::Round(($os.TotalVisibleMemorySize/1MB),2)\n    Uptime_Days = ((Get-Date) - $os.LastBootUpTime).Days\n    BIOS_SN     = $bios.SerialNumber\n    Disks       = ($disk | ForEach-Object { "$($_.DeviceID) free=$([math]::Round($_.FreeSpace/1GB,1))GB" }) -join "; "\n  }\n} -ErrorAction SilentlyContinue |\nExport-Csv .\\inventory.csv -NoTypeInformation',
          explain: 'Invoke-Command parallelizes across hosts. -ErrorAction SilentlyContinue keeps the run going past offline servers.' },
        { type: 'choice', prompt: 'WinRM blocked by firewall on some hosts. Best alternative?',
          options: ['Telnet', 'PSRemoting over SSH (PS 7) or RDP scripted', 'FTP', 'Email'],
          answer: 1,
          explain: 'PowerShell 7 supports SSH-based PSRemoting. Otherwise enable WinRM via GPO + open TCP 5985/5986.' }
      ]
    },
    {
      id: 'ps-lab4',
      title: 'Tail Security Log for Failed Logons',
      objective: 'Detection / SOC',
      steps: [
        { type: 'note', text: 'Watch for brute-force RDP attempts: Event ID 4625 > 10/min from one source.' },
        { type: 'command', prompt: 'Hourly aggregation:', cmd: 'Get-WinEvent -FilterHashtable @{LogName=\'Security\'; Id=4625; StartTime=(Get-Date).AddHours(-1)} |\n  ForEach-Object {\n    [PSCustomObject]@{\n      Time    = $_.TimeCreated\n      User    = $_.Properties[5].Value\n      Source  = $_.Properties[19].Value\n    }\n  } |\nGroup-Object Source | Sort-Object Count -Descending | Select-Object -First 10 Count, Name',
          explain: 'Group by source IP. Top offenders surface fast.' },
        { type: 'choice', prompt: 'Top source = 198.51.100.42 with 240 failed logons. Best response?',
          options: ['Ignore', 'Block at firewall, investigate exposed RDP, enforce NLA + MFA via RDS gateway, restrict RDP to VPN', 'Open RDP wider', 'Disable Windows'],
          answer: 1,
          explain: 'RDP-direct-to-internet is a top breach vector. Tunnel via VPN, RD Gateway, or Just-In-Time access.' }
      ]
    },
    {
      id: 'ps-lab5',
      title: 'Build a Reusable Module',
      objective: 'Module / function authoring',
      steps: [
        { type: 'note', text: 'Wrap a frequently-used CIM call into a reusable cmdlet `Get-ServerHealth`.' },
        { type: 'command', prompt: 'Module file Get-ServerHealth.psm1:', cmd: 'function Get-ServerHealth {\n  [CmdletBinding()]\n  param(\n    [Parameter(Mandatory, ValueFromPipeline)] [string[]] $ComputerName\n  )\n  process {\n    foreach ($c in $ComputerName) {\n      try {\n        $cs = Get-CimInstance Win32_ComputerSystem -ComputerName $c -ErrorAction Stop\n        $os = Get-CimInstance Win32_OperatingSystem -ComputerName $c\n        [PSCustomObject]@{\n          ComputerName = $c\n          Manufacturer = $cs.Manufacturer\n          Model        = $cs.Model\n          OS           = $os.Caption\n          FreeMem_MB   = [math]::Round($os.FreePhysicalMemory/1KB,0)\n          Status       = \'OK\'\n        }\n      } catch {\n        [PSCustomObject]@{ ComputerName=$c; Status=\'Unreachable\' }\n      }\n    }\n  }\n}\nExport-ModuleMember -Function Get-ServerHealth',
          explain: 'Pipeline-friendly. Try/catch returns useful status for offline hosts.' },
        { type: 'command', prompt: 'Use it:', cmd: 'Import-Module .\\Get-ServerHealth.psm1\n\'srv01\',\'srv02\' | Get-ServerHealth | Format-Table',
          explain: 'Module path can be in $env:PSModulePath for auto-load.' },
        { type: 'choice', prompt: 'Lint the module before commit?',
          options: ['Eyeball it', 'Invoke-ScriptAnalyzer .\\Get-ServerHealth.psm1', 'Just run it in prod', 'No tooling exists'],
          answer: 1,
          explain: 'PSScriptAnalyzer flags style + correctness issues (approved verbs, plural nouns, secrets, etc.).' }
      ]
    }
  ]
};

window.LABS = LABS;
