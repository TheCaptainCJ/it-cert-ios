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
    },
    {
      id: 'a2-pbq1',
      title: 'PBQ: CompTIA 7-Step Malware Removal',
      objective: '3.3 — malware removal',
      steps: [
        { type: 'note', text: 'User reports files renamed with .lock extension + ransom note on desktop. Apply 7-step process.' },
        { type: 'order',
          prompt: 'Place ALL seven steps in correct CompTIA order:',
          items: [
            '1. Investigate + verify malware symptoms',
            '2. Quarantine — disconnect from network',
            '3. Disable System Restore (Windows)',
            '4. Remediate — update AV defs + scan + remove',
            '5. Schedule scans + run updates',
            '6. Re-enable System Restore + create clean restore point',
            '7. Educate the end user'
          ],
          explain: 'CompTIA-tested order. Step 3 (disable System Restore) prevents reinfection from tainted restore points during cleanup.' },
        { type: 'multiselect',
          prompt: 'During step 2 quarantine, which actions to take?',
          options: ['Unplug Ethernet', 'Disable Wi-Fi', 'Power off — preserve evidence first if forensics needed', 'Forward sample to vendor for analysis', 'Pay ransom'],
          answers: [0, 1, 3],
          explain: 'Isolate network ASAP. Powering off destroys volatile evidence; if forensics needed, image RAM first. NEVER pay ransom as default policy.' },
        { type: 'fillblank',
          prompt: 'Term for malware lacking on-disk file footprint (uses PowerShell + WMI + registry only):',
          answer: ['fileless', 'fileless malware'],
          placeholder: 'one word',
          explain: 'Fileless malware lives in memory + abuses LOLBins (Living Off the Land Binaries). Detected via behavior + script-block logging.' },
        { type: 'choice',
          prompt: 'Best long-term defense against ransomware re-encryption?',
          options: ['Daily backup to same NAS', 'Offline / immutable / air-gapped backup with tested restore', 'BitLocker on user devices only', 'Disable Windows Update'],
          answer: 1,
          explain: 'Backup that ransomware cannot reach = offline / WORM Object Lock / air-gapped. Tested restore quarterly. Backup with no restore test = no backup.' }
      ]
    },
    {
      id: 'a2-pbq2',
      title: 'PBQ: NTFS Permissions Conflict',
      objective: '2.5 — Windows security settings',
      steps: [
        { type: 'note', text: 'User alice is in groups Marketing + Sales. Folder C:\\Reports has Marketing=Modify, Sales=Read, Everyone=Read. Determine effective access.' },
        { type: 'fillblank',
          prompt: 'Effective NTFS permission for alice on C:\\Reports?',
          answer: ['modify', 'm'],
          placeholder: 'one word',
          explain: 'NTFS Allow permissions accumulate (UNION). alice gets Modify from Marketing + Read from Sales = Modify (since Modify includes Read).' },
        { type: 'note', text: 'Admin adds explicit "Deny Write" for alice on the folder.' },
        { type: 'fillblank',
          prompt: 'New effective permission for alice?',
          answer: ['read', 'read only', 'read & execute'],
          placeholder: 'one phrase',
          explain: 'Deny ALWAYS overrides Allow in NTFS. Modify (which includes Write) is blocked; Read + Execute still allowed.' },
        { type: 'note', text: 'Folder shared as \\\\server\\reports with share permission Everyone=Read.' },
        { type: 'choice',
          prompt: 'alice accesses the folder over the network (SMB). Effective access?',
          options: ['Modify (NTFS wins)', 'Read (most restrictive of NTFS + share)', 'Full Control', 'No access'],
          answer: 1,
          explain: 'Across network: effective = MOST RESTRICTIVE intersection of NTFS + share. Share=Read overrides NTFS=Modify → effective = Read.' },
        { type: 'multiselect',
          prompt: 'Which actions can alice do at her workstation (local access, no share involved)?',
          options: ['Read files', 'Modify files', 'Delete files', 'Take ownership'],
          answers: [0],
          explain: 'Local access bypasses share permissions. NTFS Deny Write blocks Modify + Delete. Take Ownership requires Full Control or Admin.' }
      ]
    },
    {
      id: 'a2-pbq3',
      title: 'PBQ: Windows Boot Repair Order',
      objective: '3.1 — Windows boot troubleshooting',
      steps: [
        { type: 'note', text: 'PC fails to boot. Black screen, "Bootmgr is missing" message. Apply repair commands in correct order.' },
        { type: 'order',
          prompt: 'Apply bootrec commands in the recommended order:',
          items: [
            '1. bootrec /fixmbr',
            '2. bootrec /fixboot',
            '3. bootrec /scanos',
            '4. bootrec /rebuildbcd'
          ],
          explain: 'Standard MBR repair flow: fix MBR → fix boot sector → discover Windows installs → rebuild BCD entries. UEFI systems use bcdboot instead.' },
        { type: 'fillblank',
          prompt: 'For UEFI systems, command that copies boot files to EFI System Partition:',
          answer: ['bcdboot c:\\windows /s s: /f uefi', 'bcdboot', 'bcdboot c:\\windows'],
          placeholder: 'bcdboot ...',
          explain: 'bcdboot rebuilds the UEFI boot manager. Full syntax: bcdboot C:\\Windows /s S: /f UEFI (where S: = mounted ESP letter in WinRE).' },
        { type: 'multiselect',
          prompt: 'Tools to repair corrupt system files:',
          options: ['sfc /scannow', 'DISM /Online /Cleanup-Image /RestoreHealth', 'chkdsk /f /r', 'format c:'],
          answers: [0, 1, 2],
          explain: 'DISM repairs Component Store; SFC then uses it to repair system files. chkdsk fixes file-system errors. Format wipes the drive (NOT a repair).' },
        { type: 'choice',
          prompt: 'BitLocker recovery prompt at boot after firmware update. Cause?',
          options: ['BIOS update changed TPM measurement', 'BitLocker forgot the password', 'Cosmic rays flipped a bit', 'Hard drive died'],
          answer: 0,
          explain: 'TPM PCR registers track firmware + boot config. Any change requires recovery key. Always SUSPEND BitLocker before firmware updates.' }
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
    },
    {
      id: 'n-pbq1',
      title: 'PBQ: VLSM Plan for Branch Office',
      objective: '1.4 — IPv4 + VLSM',
      steps: [
        { type: 'note', text: 'Given 192.168.0.0/24. Subnets needed: Sales (60 hosts), Eng (28 hosts), HR (12 hosts), 3 point-to-point WAN links (2 hosts each).' },
        { type: 'fillblank',
          prompt: 'Smallest prefix that supports 60 hosts?',
          answer: ['/26', '26'],
          placeholder: '/xx',
          explain: '/26 = 62 usable. /27 = 30 usable (not enough). Always size for usable count (subtract 2 for network + broadcast).' },
        { type: 'order',
          prompt: 'Assign VLSM subnets in CORRECT VLSM order (largest first, lowest address first):',
          items: [
            'Sales 192.168.0.0/26 (.1-.62, bcast .63)',
            'Eng 192.168.0.64/27 (.65-.94, bcast .95)',
            'HR 192.168.0.96/28 (.97-.110, bcast .111)',
            'WAN1 192.168.0.112/30 (.113-.114, bcast .115)',
            'WAN2 192.168.0.116/30 (.117-.118, bcast .119)',
            'WAN3 192.168.0.120/30 (.121-.122, bcast .123)'
          ],
          explain: 'VLSM rule: sort by host count DESC, assign starting at lowest address, advance by block size. /26 block=64, /27 block=32, /28 block=16, /30 block=4.' },
        { type: 'multiselect',
          prompt: 'Which addresses are USABLE host IPs in 192.168.0.64/27?',
          options: ['192.168.0.64', '192.168.0.65', '192.168.0.80', '192.168.0.94', '192.168.0.95', '192.168.0.96'],
          answers: [1, 2, 3],
          explain: '/27 block=32. Network=.64, broadcast=.95. Usable .65-.94. .64 is network, .95 is broadcast, .96 is next subnet.' },
        { type: 'fillblank',
          prompt: 'How many /30 subnets fit in a /22?',
          answer: ['256', '2^8'],
          placeholder: 'Number',
          explain: '2^(30-22) = 2^8 = 256. Useful for WAN-link planning.' }
      ]
    },
    {
      id: 'n-pbq2',
      title: 'PBQ: VLAN + Trunk Config',
      objective: '2.3 — VLAN + 802.1Q',
      steps: [
        { type: 'note', text: 'You configure access port + trunk port. PC plugs into access port; uplink to another switch is a trunk.' },
        { type: 'dragmatch',
          prompt: 'Match each frame condition with the correct switch port behavior.',
          pairs: [
            { left: 'Untagged frame on access port VLAN 10', right: 'Forwarded as VLAN 10' },
            { left: 'Tagged frame VLAN 99 on trunk allowing only 10,20,30', right: 'Dropped (VLAN 99 not allowed)' },
            { left: 'Untagged frame on a trunk', right: 'Placed into native VLAN' },
            { left: 'Tagged frame VLAN 10 on access port VLAN 20', right: 'Dropped (access port expects untagged)' }
          ],
          explain: 'Access ports: 1 untagged VLAN. Trunks: tagged + 1 native (untagged) VLAN. Tag/access mismatch = drop. Allowed-VLAN-list filters trunks.' },
        { type: 'choice',
          prompt: 'Best practice for trunk native VLAN to defeat double-tagging hop?',
          options: [
            'Leave native as default VLAN 1',
            'Change native to an unused VLAN ID and tag it (vlan dot1q tag native)',
            'Disable VLANs entirely',
            'Use ISL instead of 802.1Q'
          ],
          answer: 1,
          explain: 'Double-tag attack works against default VLAN 1 native. Move native to an unused ID + force-tag. ISL is Cisco-only + deprecated.' },
        { type: 'multiselect',
          prompt: 'Pick STP enhancement features ALL access ports should have:',
          options: ['PortFast', 'BPDU Guard', 'Root Guard', 'UDLD', 'Loop Guard', 'DTP enabled'],
          answers: [0, 1],
          explain: 'Access ports: PortFast (skip listening/learning) + BPDU Guard (err-disable on rogue BPDU). Root Guard goes on partner-facing trunks. UDLD + Loop Guard on uplinks/fiber. DTP should be DISABLED to defeat VLAN hopping.' },
        { type: 'order',
          prompt: 'STP port states from initial to forwarding:',
          items: ['Blocking', 'Listening', 'Learning', 'Forwarding'],
          explain: 'Classic 802.1D order: Blocking → Listening (15s) → Learning (15s) → Forwarding. RSTP merges to Discarding → Learning → Forwarding.' }
      ]
    },
    {
      id: 'n-pbq3',
      title: 'PBQ: Routing + ACL Drop',
      objective: '2.5 — Routing tables + ACL evaluation',
      steps: [
        { type: 'note', text: 'Router has these entries: 0.0.0.0/0 via ISP, 10.0.0.0/8 via R2, 10.1.0.0/16 via R3, 10.1.5.0/24 via R4. Packet destined 10.1.5.42 arrives.' },
        { type: 'fillblank',
          prompt: 'Which next-hop wins for destination 10.1.5.42?',
          answer: ['r4', 'R4'],
          placeholder: 'R2 / R3 / R4',
          explain: 'Longest-prefix match. 10.1.5.0/24 is the most specific match for 10.1.5.42 → R4.' },
        { type: 'choice',
          prompt: 'Routes installed from multiple protocols (OSPF + RIP) — which gets used?',
          options: ['OSPF (AD 110 < 120)', 'RIP (lower metric)', 'Both load balance', 'Whichever was first'],
          answer: 0,
          explain: 'Administrative Distance breaks ties between protocols. OSPF AD = 110, RIP AD = 120. Lower wins.' },
        { type: 'multiselect',
          prompt: 'Stateful firewall: which direction must explicitly permit return traffic for a new outbound TCP session?',
          options: ['Outbound (allow SYN)', 'Inbound (allow SYN-ACK)', 'Neither — state table handles it', 'Both must be explicit'],
          answers: [2],
          explain: 'Stateful firewall tracks the outbound SYN, auto-allows the matching SYN-ACK return. Only outbound rule needs explicit permit.' },
        { type: 'order',
          prompt: 'ACL evaluation rules — apply in this order:',
          items: [
            '1. Evaluate top-down, FIRST match wins',
            '2. Implicit DENY at end if no match',
            '3. Place most specific entries above broader ones',
            '4. Recompile / push after edit'
          ],
          explain: 'Top-down + first-match + implicit-deny is THE rule. Order matters — broad permits above specific denies = denies never fire.' },
        { type: 'fillblank',
          prompt: 'Static route preferred over OSPF as backup ONLY. What AD lets it sit dormant?',
          answer: ['200', '255'],
          placeholder: 'Number',
          explain: 'Floating static = static route with AD raised above the dynamic protocol (e.g., 200) so it activates only when dynamic disappears. Default static AD = 1.' }
      ]
    },
    {
      id: 'n-pbq4',
      title: 'PBQ: Wi-Fi Site Plan',
      objective: '2.4 — Wireless deployment',
      steps: [
        { type: 'note', text: 'Office with 50 users, 2.4 + 5 GHz APs, dense neighbor APs above + below.' },
        { type: 'multiselect',
          prompt: 'Which non-overlapping 20 MHz channels for 2.4 GHz in the US?',
          options: ['1', '3', '6', '8', '11', '13'],
          answers: [0, 2, 4],
          explain: 'Only 1, 6, 11 are non-overlapping at 20 MHz in US/Canada (FCC 11-channel allocation). 13 + 14 used in EU/Japan only.' },
        { type: 'choice',
          prompt: 'WPA security choice for new deployment with all modern client devices?',
          options: ['WEP', 'WPA personal w/ TKIP', 'WPA2-Personal w/ AES-CCMP', 'WPA3-Personal w/ SAE'],
          answer: 3,
          explain: 'WPA3 SAE handshake defeats offline cracking. Use WPA3 personal where supported, WPA2/3 mixed for legacy IoT.' },
        { type: 'order',
          prompt: 'Site-survey workflow in correct sequence:',
          items: [
            '1. Predictive (Ekahau/Hamina) model from floor plan',
            '2. Pre-installation passive survey',
            '3. Install APs per design',
            '4. Post-install active survey + heatmap validation',
            '5. Tune channels + power + min-data-rate'
          ],
          explain: 'Predictive → passive → install → active → tune. Skipping post-install validation guarantees dead spots.' },
        { type: 'fillblank',
          prompt: 'Min RSSI target for VoWi-Fi at cell edge?',
          answer: ['-65', '-67', '-65 dbm', '-67 dbm'],
          placeholder: 'dBm',
          explain: 'Best practice: ≥ -65 dBm everywhere for voice. -67 acceptable; below = poor MOS scores + dropped calls.' },
        { type: 'multiselect',
          prompt: 'Pick countermeasures for evil-twin AP attack:',
          options: ['WPA3-Personal SAE', 'WPA2/3-Enterprise with server cert validation', 'MAC filtering only', 'WIPS (Wireless IPS)', 'Disable SSID broadcast'],
          answers: [1, 3],
          explain: 'Enterprise mode with cert validation prevents client from associating with rogue AP. WIPS detects + alerts. MAC filtering + hidden SSID are trivially bypassed.' }
      ]
    },
    {
      id: 'n-pbq5',
      title: 'PBQ: Troubleshoot Slow Web',
      objective: '5.5 — Network performance issues',
      steps: [
        { type: 'note', text: 'User: "internet feels slow only on this one site." Ping to gateway is fine. Speedtest passes.' },
        { type: 'order',
          prompt: 'Apply top-down troubleshooting steps:',
          items: [
            '1. Test access from another device on same network',
            '2. Check DNS resolution: nslookup site.com',
            '3. TLS handshake: openssl s_client -connect site:443',
            '4. Traceroute to identify failing hop',
            '5. Check for proxy / TLS inspection rule applied',
            '6. Report to ISP or website owner with evidence'
          ],
          explain: 'Top-down isolates fast: reproduce → DNS → TLS → network path → middlebox → upstream.' },
        { type: 'multiselect',
          prompt: 'Which Wireshark filters help diagnose retransmit symptoms?',
          options: ['tcp.analysis.retransmission', 'tcp.analysis.duplicate_ack', 'tcp.window_size == 0', 'ip.ttl == 1', 'http.request.method == GET'],
          answers: [0, 1, 2],
          explain: 'Retransmission, duplicate ACK, and zero-window indicate packet loss or receiver buffer pressure. TTL=1 is normal traceroute. GET filter is unrelated.' },
        { type: 'fillblank',
          prompt: 'Acronym for "high ping under load with otherwise fast link":',
          answer: ['bufferbloat'],
          placeholder: 'one word',
          explain: 'Bufferbloat = oversized buffer queues at bottleneck creating latency under load. Fix: enable fq_codel / SQM on the router.' },
        { type: 'choice',
          prompt: 'iperf3 test: 940 Mbps over 1 Gbps link. Healthy?',
          options: [
            'No — should hit 1000 Mbps exactly',
            'Yes — ~94% of line rate is the expected TCP goodput after headers + IFG',
            'No — should be at least 1.1 Gbps',
            'Cable is bad'
          ],
          answer: 1,
          explain: 'TCP goodput on 1 Gbps Ethernet caps near 940 Mbps after L2/L3/L4 headers, ACKs, and IFG. Anything ≥ 900 Mbps = healthy.' }
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
    },
    {
      id: 's-pbq1',
      title: 'PBQ: Identify Attack Type',
      objective: '2.4 — analyze indicators',
      steps: [
        { type: 'note', text: 'Various security scenarios — pick the correct attack name from each description.' },
        { type: 'dragmatch',
          prompt: 'Match each scenario with its attack name.',
          pairs: [
            { left: 'Floods CAM table on a switch with bogus MACs', right: 'MAC flooding' },
            { left: 'Forged ARP replies redirect victim traffic to attacker', right: 'ARP poisoning / spoofing' },
            { left: 'Phone numbers ported to attacker SIM, OTP codes stolen', right: 'SIM swap' },
            { left: 'Crafted ICMP echo to spoofed broadcast → amplified flood', right: 'Smurf attack' },
            { left: 'Stolen TGT replayed against domain controllers', right: 'Pass-the-Ticket' },
            { left: 'Attacker registers lookalike-domain login + reverse-proxies real M365 login + steals session cookie', right: 'AitM phishing (EvilProxy)' }
          ],
          explain: 'Memorize the names + their distinguishing trick. Many Sec+ questions are "which attack matches this description".' },
        { type: 'multiselect',
          prompt: 'Select attacks that target the CIA confidentiality pillar specifically:',
          options: ['Eavesdropping / sniffing', 'DDoS', 'Phishing for credentials', 'Defacement', 'Side-channel attack', 'Ransomware encryption'],
          answers: [0, 2, 4],
          explain: 'Confidentiality = unauthorized disclosure. DDoS targets availability; defacement targets integrity; ransomware targets availability + integrity.' },
        { type: 'fillblank',
          prompt: 'Type of attack where attacker poisons resolver cache with false DNS records:',
          answer: ['dns cache poisoning', 'dns poisoning', 'cache poisoning', 'pharming'],
          placeholder: 'phrase',
          explain: 'DNS cache poisoning / DNS spoofing redirects victims to attacker-controlled sites. DNSSEC + source-port randomization mitigate.' },
        { type: 'order',
          prompt: 'Kill-chain phases in correct order (Lockheed Martin):',
          items: [
            '1. Reconnaissance',
            '2. Weaponization',
            '3. Delivery',
            '4. Exploitation',
            '5. Installation',
            '6. Command & Control (C2)',
            '7. Actions on Objectives'
          ],
          explain: 'Memorize the 7 phases. Defenders aim to break the chain as early as possible.' }
      ]
    },
    {
      id: 's-pbq2',
      title: 'PBQ: Cryptography Picker',
      objective: '1.4 / 4.3 — applied cryptography',
      steps: [
        { type: 'note', text: 'Choose the right cryptographic primitive for each requirement.' },
        { type: 'dragmatch',
          prompt: 'Match the requirement to the correct primitive.',
          pairs: [
            { left: 'Symmetric block cipher (encryption at rest)', right: 'AES-256-GCM' },
            { left: 'Asymmetric key exchange (Perfect Forward Secrecy)', right: 'ECDHE (X25519)' },
            { left: 'Digital signature (modern)', right: 'EdDSA (Ed25519)' },
            { left: 'Password hashing (memory-hard)', right: 'Argon2id' },
            { left: 'Generic cryptographic hash', right: 'SHA-256' },
            { left: 'MAC for short messages', right: 'HMAC-SHA256' }
          ],
          explain: 'Modern picks: AES-GCM for AEAD, ECDHE for key exchange w/ PFS, Ed25519 for signatures, Argon2id for passwords, SHA-256 for general hashing. AVOID MD5, SHA-1, RC4, 3DES, DES.' },
        { type: 'multiselect',
          prompt: 'Algorithms considered BROKEN / deprecated:',
          options: ['MD5', 'SHA-1', 'AES-256', 'DES', '3DES', 'RC4', 'ECDSA P-256'],
          answers: [0, 1, 3, 4, 5],
          explain: 'MD5 + SHA-1 broken collisions. DES + 3DES weak / deprecated. RC4 cryptanalyzed. AES-256 + ECDSA still strong.' },
        { type: 'fillblank',
          prompt: 'Recommended TLS minimum version in 2025:',
          answer: ['tls 1.2', '1.2', 'tls1.2'],
          placeholder: 'TLS x.y',
          explain: 'TLS 1.2 baseline (PCI requirement). TLS 1.3 preferred (faster + AEAD only). Disable TLS 1.0 / 1.1 / SSL.' },
        { type: 'choice',
          prompt: 'Best storage for a corporate signing key?',
          options: ['Embedded in source code', 'Plaintext file with strong permissions', 'HSM / cloud KMS with audit logging', 'Encrypted with a password also in the same repo'],
          answer: 2,
          explain: 'HSM (Hardware Security Module) or cloud KMS keeps the key in tamper-resistant hardware; access logged. Source code = leak risk.' }
      ]
    },
    {
      id: 's-pbq3',
      title: 'PBQ: Incident Response Steps',
      objective: '4.4 — IR process (NIST SP 800-61)',
      steps: [
        { type: 'note', text: 'Phishing campaign detected. Two finance users clicked + entered credentials. Mailbox rules forwarding to external. Begin IR.' },
        { type: 'order',
          prompt: 'NIST SP 800-61 phases in correct order:',
          items: [
            '1. Preparation',
            '2. Detection & Analysis',
            '3. Containment',
            '4. Eradication',
            '5. Recovery',
            '6. Lessons Learned (Post-mortem)'
          ],
          explain: 'Memorize: Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned. Preparation is ongoing, not one-time.' },
        { type: 'multiselect',
          prompt: 'Containment actions for the compromised users:',
          options: ['Revoke active sessions in Entra ID / IdP', 'Reset passwords + force MFA re-enroll', 'Remove malicious inbox forwarding rules', 'Hunt for OAuth grant abuse', 'Disable accounts permanently'],
          answers: [0, 1, 2, 3],
          explain: 'Revoke tokens + rotate creds + remove inbox-rule persistence + audit OAuth grants. Permanent disable hurts business; temporary lock + investigate is right.' },
        { type: 'fillblank',
          prompt: 'GDPR breach-notification deadline to supervisory authority (max hours):',
          answer: ['72', '72 hours'],
          placeholder: 'hours',
          explain: 'GDPR Article 33: notify within 72 hours of becoming aware unless unlikely to result in risk to rights/freedoms of data subjects.' },
        { type: 'choice',
          prompt: 'Best long-term mitigation against credential-phishing kits like EvilProxy?',
          options: ['Annual training only', 'Phishing-resistant FIDO2 / passkeys', 'Force password change every 30 days', 'Block all external mail'],
          answer: 1,
          explain: 'Origin-bound FIDO2 / passkeys cannot be relayed through reverse-proxy phishing. Eliminate SMS + push notifications for high-value accounts.' },
        { type: 'order',
          prompt: 'Lessons-Learned post-mortem outputs (in correct documentation order):',
          items: [
            '1. Timeline of events (ts → action)',
            '2. Root-cause analysis (5 Whys / Fishbone)',
            '3. Impact assessment (users / data / cost)',
            '4. Detection gaps + new alerts',
            '5. Prevention actions + owners + due dates',
            '6. Communications + regulatory notifications log'
          ],
          explain: 'Blameless post-mortem within 1-2 weeks of any Sev1/Sev2. Owner + date on every action prevents follow-up rot.' }
      ]
    },
    {
      id: 's-pbq4',
      title: 'PBQ: Network Hardening Checklist',
      objective: '3.2 / 3.4 — secure baseline',
      steps: [
        { type: 'note', text: 'Harden new switch + small office network. Pick + order baseline tasks.' },
        { type: 'multiselect',
          prompt: 'Required hardening items for a managed switch:',
          options: [
            'Change default admin password + enable MFA on mgmt',
            'Update firmware to latest stable',
            'Disable unused services (Telnet, HTTP, SNMPv1/v2c)',
            'Configure SSH + HTTPS only for mgmt',
            'Enable BPDU Guard + DHCP Snooping + DAI + IP Source Guard',
            'Leave default VLAN 1 on trunks for compatibility',
            'Configure NTP + Syslog forwarding to SIEM',
            'Apply ACL on management VLAN'
          ],
          answers: [0, 1, 2, 3, 4, 6, 7],
          explain: 'All items EXCEPT leaving native VLAN 1 — that\'s a VLAN-hopping risk. Move native off VLAN 1 + force-tag it.' },
        { type: 'dragmatch',
          prompt: 'Match the protocol with its secure replacement.',
          pairs: [
            { left: 'Telnet (23)', right: 'SSH (22)' },
            { left: 'FTP (20/21)', right: 'SFTP (22) or FTPS (990)' },
            { left: 'HTTP (80)', right: 'HTTPS (443)' },
            { left: 'SNMPv1 / v2c (161)', right: 'SNMPv3 with AuthPriv' },
            { left: 'LDAP (389)', right: 'LDAPS (636)' },
            { left: 'POP3 (110)', right: 'POP3S (995)' }
          ],
          explain: 'Memorize plaintext → encrypted pair for every protocol. Sec+ + Net+ test these heavily.' },
        { type: 'order',
          prompt: 'Defense-in-depth layers in correct outward-to-inward order:',
          items: [
            '1. Perimeter (Internet edge firewall + IPS + DDoS)',
            '2. Network (segmentation + east-west)',
            '3. Endpoint (host firewall + EDR + patching)',
            '4. Application (WAF + secure code + input validation)',
            '5. Data (encryption + DLP + classification)',
            '6. Identity (strong auth + MFA + PIM)',
            '7. Physical (badges + cameras + locks)',
            '8. Administrative (policy + training)'
          ],
          explain: 'Layered controls so a single failure doesn\'t equal a full breach. Test by removing one layer + checking redundancy.' },
        { type: 'fillblank',
          prompt: 'Stripped-down model where every request authenticated, authorized, encrypted; no implicit trust by network location:',
          answer: ['zero trust', 'zero-trust', 'ztna', 'zero trust architecture'],
          placeholder: 'phrase',
          explain: 'Zero Trust (NIST SP 800-207). ZTNA brokers per-app access replacing flat VPN.' }
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
    },
    {
      id: 'l-pbq1',
      title: 'PBQ: Linux Permissions',
      objective: '2.4 — file permissions + special bits',
      steps: [
        { type: 'note', text: 'Translate between numeric (octal) and symbolic Linux file permissions.' },
        { type: 'fillblank',
          prompt: 'Numeric mode for "rwxr-xr-x":',
          answer: ['755'],
          placeholder: 'three digits',
          explain: 'r=4, w=2, x=1. Owner=7 (4+2+1), Group=5 (4+1), Other=5. Default for executables/dirs.' },
        { type: 'fillblank',
          prompt: 'Numeric mode for "-rw-------" (private file like SSH key):',
          answer: ['600'],
          placeholder: 'three digits',
          explain: 'Owner rw=6, Group=0, Other=0. ssh refuses to use a private key with broader permissions.' },
        { type: 'dragmatch',
          prompt: 'Match special bit to behavior.',
          pairs: [
            { left: '4xxx (setuid)', right: 'Run as file owner' },
            { left: '2xxx (setgid)', right: 'Run as group OR new files inherit dir group' },
            { left: '1xxx (sticky)', right: 'Only owner can delete files in dir (/tmp pattern)' },
            { left: 'chattr +i', right: 'Immutable — even root cannot modify until -i' }
          ],
          explain: 'setuid: passwd (4755). setgid on dirs: shared project folders inherit group. sticky: /tmp. immutable: critical config files.' },
        { type: 'multiselect',
          prompt: 'Commands that change Linux permissions:',
          options: ['chmod', 'chown', 'chgrp', 'setfacl', 'getfacl', 'umask'],
          answers: [0, 3, 5],
          explain: 'chmod sets mode. setfacl applies POSIX ACLs. umask sets default mode mask for new files. chown/chgrp change OWNER/GROUP, not permissions. getfacl reads.' },
        { type: 'order',
          prompt: 'Steps to make a script executable + run it (correct order):',
          items: [
            '1. nano script.sh (write code starting with #!/usr/bin/env bash)',
            '2. chmod +x script.sh',
            '3. ./script.sh    (relative path execution)',
            '4. (optional) mv script.sh /usr/local/bin/ + run by name'
          ],
          explain: 'Shebang first line, then add execute bit. /usr/local/bin is in $PATH so name-only works after move.' }
      ]
    },
    {
      id: 'l-pbq2',
      title: 'PBQ: systemd Service Lifecycle',
      objective: '2.7 — manage services',
      steps: [
        { type: 'note', text: 'Daemon called myapp must start at boot, auto-restart on crash, log to journal.' },
        { type: 'order',
          prompt: 'Steps to deploy a new systemd service in correct order:',
          items: [
            '1. Write /etc/systemd/system/myapp.service unit file',
            '2. sudo systemctl daemon-reload (re-read units)',
            '3. sudo systemctl enable myapp (start at boot)',
            '4. sudo systemctl start myapp (start now)',
            '5. systemctl status myapp (verify running)',
            '6. journalctl -u myapp -f (follow logs)'
          ],
          explain: 'daemon-reload after editing unit file. enable+start = start now AND at boot. Combine: systemctl enable --now myapp.' },
        { type: 'dragmatch',
          prompt: 'Match systemctl verb to behavior.',
          pairs: [
            { left: 'start', right: 'Begin service now' },
            { left: 'enable', right: 'Auto-start at boot' },
            { left: 'restart', right: 'Stop then start (drops connections)' },
            { left: 'reload', right: 'Re-read config without dropping connections' },
            { left: 'mask', right: 'Strongest disable — symlinks unit to /dev/null' },
            { left: 'daemon-reload', right: 'Reload systemd config after unit-file edit' }
          ],
          explain: 'enable+start vs restart vs reload most-tested. reload only works if service supports SIGHUP / has ExecReload.' },
        { type: 'fillblank',
          prompt: 'Single command to start now AND enable at boot:',
          answer: ['systemctl enable --now myapp', 'sudo systemctl enable --now myapp', 'enable --now'],
          placeholder: 'systemctl ...',
          explain: 'systemctl enable --now SERVICE = enable + start in one command.' },
        { type: 'multiselect',
          prompt: 'Useful journalctl filters:',
          options: ['-u <service>', '--since "1 hour ago"', '-p err', '-f', '-k (kernel)', '-x'],
          answers: [0, 1, 2, 3, 4, 5],
          explain: 'All valid. -u filter by unit, --since time, -p priority, -f follow, -k kernel only, -x explain with catalog entries.' },
        { type: 'choice',
          prompt: 'Service shows "active (exited)". Meaning?',
          options: [
            'Service crashed',
            'Service ran to completion (oneshot type) — expected',
            'Service is hung',
            'Service is starting'
          ],
          answer: 1,
          explain: 'Type=oneshot units exit after their job runs. status "active (exited)" = success. (Failed = "failed".)' }
      ]
    },
    {
      id: 'l-pbq3',
      title: 'PBQ: Disk + LVM Setup',
      objective: '1.2 / 1.7 — storage management',
      steps: [
        { type: 'note', text: 'Add new disk /dev/sdb, create LVM volume, mount persistently.' },
        { type: 'order',
          prompt: 'LVM creation steps in correct order:',
          items: [
            '1. pvcreate /dev/sdb     # mark physical volume',
            '2. vgcreate vg_data /dev/sdb     # create volume group',
            '3. lvcreate -L 50G -n lv_app vg_data     # create logical volume',
            '4. mkfs.ext4 /dev/vg_data/lv_app     # format',
            '5. mkdir /mnt/app && mount /dev/vg_data/lv_app /mnt/app',
            '6. Add UUID entry to /etc/fstab for persistent mount'
          ],
          explain: 'PV → VG → LV → mkfs → mount → fstab. LVM allows online expand: lvextend -r -L +20G; resize2fs / xfs_growfs.' },
        { type: 'multiselect',
          prompt: 'Commands that list block devices + filesystems:',
          options: ['lsblk', 'blkid', 'df -h', 'fdisk -l', 'mount', 'ls /dev/sd*'],
          answers: [0, 1, 2, 3, 4],
          explain: 'lsblk tree view. blkid UUID + label + type. df mounted FS usage. fdisk -l partition table. mount currently mounted. ls /dev/sd* just nodes (least useful).' },
        { type: 'fillblank',
          prompt: 'Best identifier for /etc/fstab entries (NOT /dev/sdX which can shift):',
          answer: ['uuid', 'UUID'],
          placeholder: 'word',
          explain: 'UUID survives device reorder + cloning. Get via blkid /dev/sdX.' },
        { type: 'choice',
          prompt: 'Filesystem default on modern RHEL?',
          options: ['ext4', 'XFS', 'Btrfs', 'ZFS'],
          answer: 1,
          explain: 'RHEL 7+ default = XFS. Ubuntu default = ext4. openSUSE root = Btrfs. ZFS via OpenZFS available cross-distro.' },
        { type: 'dragmatch',
          prompt: 'Match mount option to purpose.',
          pairs: [
            { left: 'noexec', right: 'Disallow execution from this FS' },
            { left: 'nosuid', right: 'Ignore setuid bits' },
            { left: 'nodev', right: 'No device nodes interpreted' },
            { left: 'ro', right: 'Read-only mount' },
            { left: 'noatime', right: 'Skip last-access updates (perf)' }
          ],
          explain: 'Hardening mounts: /tmp noexec,nosuid,nodev defeats privilege escalation paths.' }
      ]
    },
    {
      id: 'l-pbq4',
      title: 'PBQ: Network Troubleshooting on Linux',
      objective: '3.1 — networking troubleshooting',
      steps: [
        { type: 'note', text: 'App on server can\'t reach external DB. Walk through Linux diagnostics.' },
        { type: 'order',
          prompt: 'Bottom-up Linux diagnostic command order:',
          items: [
            '1. ip a (verify IP + interface up)',
            '2. ip route (default gateway + routes)',
            '3. ping 8.8.8.8 (Internet reachability)',
            '4. cat /etc/resolv.conf + nslookup db.example.com (DNS)',
            '5. nc -vz db.example.com 5432 (TCP port reachability)',
            '6. ss -tnp state established (verify connections)',
            '7. tcpdump -i any host db.example.com (capture if needed)'
          ],
          explain: 'IP → route → ICMP → DNS → port → connections → packet trace. Stop at first failure + fix that layer.' },
        { type: 'fillblank',
          prompt: 'Modern replacement for netstat -ano on Linux:',
          answer: ['ss -tnlp', 'ss', 'ss -tunlp'],
          placeholder: 'command',
          explain: 'ss is the replacement; faster + kernel-direct. Common flags: -t TCP, -u UDP, -n no resolve, -l listen, -p process.' },
        { type: 'multiselect',
          prompt: 'Tools to test DNS resolution:',
          options: ['dig', 'host', 'nslookup', 'getent hosts', 'curl', 'ping'],
          answers: [0, 1, 2, 3],
          explain: 'dig + host + nslookup are dedicated DNS. getent uses NSS (includes /etc/hosts). curl + ping do DNS implicitly but aren\'t inspection tools.' },
        { type: 'choice',
          prompt: 'Port 5432 reachable but app times out. Likely cause?',
          options: ['DNS broken', 'TCP works → app-layer (auth / TLS / pg_hba) issue', 'Cable issue', 'Wrong gateway'],
          answer: 1,
          explain: 'TCP handshake completing means L1-L4 OK. Look at PostgreSQL pg_hba.conf, SSL config, app credentials.' }
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
    },
    {
      id: 'c-pbq1',
      title: 'PBQ: Service Model Identification',
      objective: '1.1 — IaaS / PaaS / SaaS / FaaS',
      steps: [
        { type: 'note', text: 'Identify the cloud service model for each example.' },
        { type: 'dragmatch',
          prompt: 'Match each cloud product to its service model.',
          pairs: [
            { left: 'EC2 / Azure VM / Compute Engine', right: 'IaaS' },
            { left: 'App Service / Elastic Beanstalk / Cloud Run', right: 'PaaS' },
            { left: 'Microsoft 365 / Salesforce / Workday', right: 'SaaS' },
            { left: 'Lambda / Azure Functions / Cloud Run Functions', right: 'FaaS' },
            { left: 'EKS / AKS / GKE / Fargate', right: 'CaaS' },
            { left: 'AVD / Windows 365 / WorkSpaces', right: 'DaaS' }
          ],
          explain: 'Memorize the famous products → model. CaaS = Container as a Service. DaaS = Desktop as a Service. FaaS = serverless functions.' },
        { type: 'order',
          prompt: 'Cloud abstractions ordered from MOST customer control to LEAST:',
          items: [
            '1. On-prem (you own everything)',
            '2. IaaS (you manage OS+ up)',
            '3. PaaS (you manage app + data)',
            '4. SaaS (provider manages everything)'
          ],
          explain: 'Trade-off: more abstraction = less control + less ops work. SaaS leaves you only data + identity to own.' },
        { type: 'multiselect',
          prompt: 'In IaaS, customer is responsible for:',
          options: ['Hypervisor patches', 'Guest OS patches', 'Application code', 'Data + access', 'Physical security', 'Storage encryption keys (CMK option)'],
          answers: [1, 2, 3, 5],
          explain: 'IaaS: you own OS+app+data. Provider owns hypervisor + physical. Customer can opt for CMK over provider-managed keys.' },
        { type: 'fillblank',
          prompt: 'Service model where customer manages only data + identity:',
          answer: ['saas', 'software as a service'],
          placeholder: 'acronym',
          explain: 'SaaS: provider runs hardware + OS + runtime + app. You configure + bring data + manage user accounts.' }
      ]
    },
    {
      id: 'c-pbq2',
      title: 'PBQ: Pick Storage Class',
      objective: '2.1 — cloud storage tiers',
      steps: [
        { type: 'note', text: 'Match each workload to the most cost-effective AWS S3 storage class.' },
        { type: 'dragmatch',
          prompt: 'Match access pattern to storage class.',
          pairs: [
            { left: 'Active website assets, accessed thousands times/day', right: 'S3 Standard' },
            { left: 'Backup accessed monthly, rapid restore needed', right: 'S3 Standard-IA' },
            { left: 'Compliance archive, restore tolerable in minutes-hours', right: 'S3 Glacier Instant / Flexible' },
            { left: 'Tape-replacement archive, restore 1-12h, lowest cost', right: 'S3 Glacier Deep Archive' },
            { left: 'Workload with unknown / shifting access pattern', right: 'S3 Intelligent-Tiering' }
          ],
          explain: 'Standard = hot. Standard-IA = warm. Glacier = cold. Deep Archive = frozen. Intelligent-Tiering auto-tiers by access pattern.' },
        { type: 'multiselect',
          prompt: 'Defenses against ransomware on cloud object storage:',
          options: ['S3 Object Lock (WORM)', 'Versioning enabled', 'Cross-account backup copy', 'MFA Delete', 'Server-side encryption', 'Make bucket public'],
          answers: [0, 1, 2, 3],
          explain: 'Object Lock + Versioning + MFA Delete + Cross-account separation = ransomware-resilient. Encryption alone does not prevent destruction. Public = breach.' },
        { type: 'fillblank',
          prompt: 'NIST term for backup that cannot be modified during retention window:',
          answer: ['immutable', 'immutable backup', 'worm'],
          placeholder: 'one word',
          explain: 'Immutable / WORM (Write Once Read Many) backups survive ransomware + insider deletion within retention period.' },
        { type: 'choice',
          prompt: 'GLBA-regulated bank wants long retention with infrequent access at lowest cost. Pick:',
          options: ['S3 Standard', 'S3 Standard-IA', 'S3 Glacier Flexible Retrieval', 'S3 Glacier Deep Archive'],
          answer: 3,
          explain: 'Deep Archive ~$0.001/GB-mo. Restore 1-12h. Perfect for 7-yr SOX/GLBA archive.' }
      ]
    },
    {
      id: 'c-pbq3',
      title: 'PBQ: Multi-AZ vs Multi-Region',
      objective: '4.2 — HA + DR design',
      steps: [
        { type: 'note', text: 'Design HA + DR for a customer-facing web app.' },
        { type: 'dragmatch',
          prompt: 'Match goal to architecture.',
          pairs: [
            { left: 'Tolerate single DC failure within a region', right: 'Multi-AZ deployment (3 AZs)' },
            { left: 'Survive full region outage', right: 'Multi-region active-passive or active-active' },
            { left: 'Lowest cost DR — minimal core running, scale on disaster', right: 'Pilot light' },
            { left: 'Scaled-down full stack ready, scale up on failover', right: 'Warm standby' },
            { left: 'Backups only, rebuild from scratch', right: 'Backup & restore (highest RTO/RPO)' }
          ],
          explain: 'DR strategy ladder — Backup-Restore → Pilot Light → Warm Standby → Multi-Site Active-Active. Cost increases up the ladder; RTO/RPO decreases.' },
        { type: 'order',
          prompt: 'DR ladder from HIGHEST RTO/RPO to LOWEST:',
          items: [
            '1. Backup & Restore (hours-days)',
            '2. Pilot Light (10s of minutes)',
            '3. Warm Standby (minutes)',
            '4. Multi-Site Active-Active (near-zero)'
          ],
          explain: 'Trade cost for RTO/RPO. Active-active = double infra + complex routing but instant failover.' },
        { type: 'multiselect',
          prompt: 'Items to include in a DR runbook:',
          options: ['Step-by-step failover procedure', 'Contact list (paged + escalation)', 'Decision criteria for declaring disaster', 'Communication templates', 'Backout procedure', 'Sample login credentials'],
          answers: [0, 1, 2, 3, 4],
          explain: 'Never store credentials in runbooks. Use a secrets vault.' },
        { type: 'fillblank',
          prompt: 'How often DR drills should occur AT MINIMUM:',
          answer: ['annually', 'yearly', '1 year', 'once a year'],
          placeholder: 'period',
          explain: 'NIST + ISO best practice: full DR test annually; tabletop quarterly; backup-restore test monthly.' }
      ]
    },
    {
      id: 'c-pbq4',
      title: 'PBQ: Cloud Cost Optimization',
      objective: '5.3 — cost management',
      steps: [
        { type: 'note', text: 'Cloud bill jumped 40%. Find + apply optimization levers.' },
        { type: 'multiselect',
          prompt: 'Cost optimization levers for steady-state workloads:',
          options: [
            'Reserved Instances (1-3 yr commit)',
            'Savings Plans (compute spend commit)',
            'Spot / Preemptible for interruptible jobs',
            'Right-sizing via Compute Optimizer / Azure Advisor',
            'Hot tier storage for cold data',
            'Cross-region replication for low-priority data'
          ],
          answers: [0, 1, 2, 3],
          explain: 'Hot storage for cold = wasteful. Cross-region replicate adds egress + storage costs; only for compliance / DR.' },
        { type: 'dragmatch',
          prompt: 'Match cost lever to discount range.',
          pairs: [
            { left: 'On-demand', right: '0% (baseline)' },
            { left: 'Reserved Instance 1yr no upfront', right: '~30%' },
            { left: 'Reserved Instance 3yr all-upfront', right: '~70%' },
            { left: 'Savings Plan 3yr', right: '~65%' },
            { left: 'Spot / Preemptible', right: 'Up to 90%' }
          ],
          explain: 'Spot biggest discount but can be reclaimed any time. RIs need usage pattern certainty.' },
        { type: 'fillblank',
          prompt: 'Cross-team accountability discipline for cloud spend:',
          answer: ['finops'],
          placeholder: 'one word',
          explain: 'FinOps = engineering + finance + procurement collaboration on cloud cost.' },
        { type: 'order',
          prompt: 'Cost-investigation steps after unexpected bill spike:',
          items: [
            '1. Open Cost Explorer / Cost Management — sort by service',
            '2. Identify top services + accounts driving the change',
            '3. Tag-based breakdown (env, owner, project)',
            '4. Compare to previous billing period delta',
            '5. Talk to owners of newly-spiking workloads',
            '6. Apply right-sizing / Reservations / cleanup',
            '7. Set budgets + anomaly alerts to prevent recurrence'
          ],
          explain: 'Always investigate before acting. Egress and idle resources are common culprits.' }
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
    },
    {
      id: 'az-pbq1',
      title: 'PBQ: Azure Resource Hierarchy',
      objective: 'Azure architecture',
      steps: [
        { type: 'note', text: 'Place each Azure construct in its correct scope level.' },
        { type: 'order',
          prompt: 'Order Azure scopes from BROADEST to NARROWEST:',
          items: [
            '1. Tenant (Microsoft Entra ID root)',
            '2. Management Group',
            '3. Subscription',
            '4. Resource Group',
            '5. Resource'
          ],
          explain: 'Inheritance flows top-down. Policy or RBAC at MG cascades to every subscription/RG/resource beneath.' },
        { type: 'dragmatch',
          prompt: 'Match each scope to its typical use.',
          pairs: [
            { left: 'Tenant', right: 'Identity boundary (Entra ID)' },
            { left: 'Management Group', right: 'Apply policy + RBAC across many subscriptions' },
            { left: 'Subscription', right: 'Billing + quota boundary' },
            { left: 'Resource Group', right: 'Lifecycle + permissions container for one workload' },
            { left: 'Resource', right: 'VM / storage account / database / etc.' }
          ],
          explain: 'Memorize: Tenant = identity. MG = grouping. Sub = bill. RG = lifecycle. Resource = thing.' },
        { type: 'multiselect',
          prompt: 'Resource Group facts (pick TRUE):',
          options: [
            'Every resource lives in exactly one RG',
            'RG itself has a region (where its metadata sits)',
            'Resources can be in different regions than their RG',
            'You can nest RGs inside each other',
            'Deleting an RG deletes every resource inside'
          ],
          answers: [0, 1, 2, 4],
          explain: 'RGs CANNOT be nested. Everything else is true. Resource region ≠ RG region is common.' },
        { type: 'fillblank',
          prompt: 'SLA for two VMs deployed across Availability Zones in one region:',
          answer: ['99.99', '99.99%', '4 nines'],
          placeholder: 'percent',
          explain: 'Multi-AZ VMs in same region get 99.99% SLA. Single instance with Premium SSD = 99.9%. Availability Set (same DC, fault/update domains) = 99.95%.' }
      ]
    },
    {
      id: 'az-pbq2',
      title: 'PBQ: Identify Azure Service',
      objective: 'Azure services',
      steps: [
        { type: 'note', text: 'Pick the right Azure service for each scenario.' },
        { type: 'dragmatch',
          prompt: 'Match the need to the Azure service.',
          pairs: [
            { left: 'Run a Windows VM with full OS control', right: 'Azure Virtual Machines (IaaS)' },
            { left: 'Host a web API with Microsoft patching OS', right: 'App Service (PaaS)' },
            { left: 'Run a container without orchestration', right: 'Azure Container Instances (ACI)' },
            { left: 'Run microservices on managed Kubernetes', right: 'AKS' },
            { left: 'Code runs only on HTTP request, scale-to-zero', right: 'Azure Functions (FaaS)' },
            { left: 'Stream Windows desktops to iPads', right: 'Azure Virtual Desktop (DaaS)' }
          ],
          explain: 'Compute spectrum: VM → App Service → Container Apps/AKS → Functions. Pick by control vs ops effort.' },
        { type: 'multiselect',
          prompt: 'Which storage redundancy survives a full REGION outage?',
          options: ['LRS', 'ZRS', 'GRS', 'GZRS', 'RA-GRS', 'RA-GZRS'],
          answers: [2, 3, 4, 5],
          explain: 'GRS/GZRS replicate to paired region. RA-GRS/RA-GZRS add read access to secondary. LRS=1 DC; ZRS=3 zones same region.' },
        { type: 'fillblank',
          prompt: 'Cloud security posture management service in Azure (acronym):',
          answer: ['cspm', 'defender for cloud', 'mdc'],
          placeholder: 'acronym',
          explain: 'Microsoft Defender for Cloud = CSPM (posture + Secure Score) + CWPP (workload protection per plan).' },
        { type: 'choice',
          prompt: 'Best Azure service for global anycast L7 entry point + WAF + CDN for a multi-region web app:',
          options: ['Azure Load Balancer', 'Application Gateway', 'Azure Front Door', 'Traffic Manager'],
          answer: 2,
          explain: 'Front Door = global anycast L7 + CDN + WAF. AppGW = regional L7. ALB = regional L4. Traffic Manager = DNS-based, no caching/WAF.' }
      ]
    },
    {
      id: 'az-pbq3',
      title: 'PBQ: Cost Tool Picker',
      objective: 'Azure cost management',
      steps: [
        { type: 'dragmatch',
          prompt: 'Match each cost task to the correct Azure tool.',
          pairs: [
            { left: 'Estimate monthly cost BEFORE deploying', right: 'Azure Pricing Calculator' },
            { left: 'Compare 3-year on-prem vs Azure cost', right: 'Azure TCO Calculator' },
            { left: 'Analyze ACTUAL spend + set budgets + alerts', right: 'Microsoft Cost Management' },
            { left: 'See cost-saving recommendations (idle VMs, RIs)', right: 'Azure Advisor (Cost tab)' }
          ],
          explain: 'Memorize Pricing vs TCO vs Cost Management vs Advisor — most common AZ-900 exam confusion.' },
        { type: 'multiselect',
          prompt: 'Pick the discount mechanisms available in Azure:',
          options: [
            'Reservations (1-3 yr commit)',
            'Savings Plan for Compute (1-3 yr hourly commit)',
            'Spot Virtual Machines (evictable)',
            'Azure Hybrid Benefit (BYO Windows/SQL licenses)',
            'Dev/Test pricing',
            'Pay-As-You-Go (no discount, baseline)'
          ],
          answers: [0, 1, 2, 3, 4],
          explain: 'All except PAYG provide a discount. PAYG = baseline on-demand pricing.' },
        { type: 'fillblank',
          prompt: 'Reservation maximum discount in Azure (up to)',
          answer: ['72', '72%', '72 percent'],
          placeholder: 'percent',
          explain: '3-year all-upfront RI saves up to 72% vs PAYG. Spot up to 90% but evictable.' },
        { type: 'order',
          prompt: 'Cost analysis workflow in order:',
          items: [
            '1. View Cost Management dashboard by subscription/RG',
            '2. Filter top services by spend',
            '3. Group by tag (env / owner / project) for chargeback',
            '4. Set budget alert at 80% threshold',
            '5. Apply Advisor recommendations (right-size + RIs)',
            '6. Review monthly trend; adjust commitments'
          ],
          explain: 'Dashboard → break down → tag → alert → optimize → review. Anomaly detection catches sudden spikes early.' }
      ]
    },
    {
      id: 'az-pbq4',
      title: 'PBQ: Identity, MFA & Conditional Access',
      objective: 'Identity (Microsoft Entra ID)',
      steps: [
        { type: 'note', text: 'Enable secure sign-in for corp workforce. Pick correct Entra ID components.' },
        { type: 'dragmatch',
          prompt: 'Match feature to purpose.',
          pairs: [
            { left: 'Microsoft Entra ID (formerly Azure AD)', right: 'Cloud identity directory + SSO' },
            { left: 'Conditional Access', right: 'Policy engine: allow/block/grant w/ controls based on signals' },
            { left: 'Identity Protection (P2)', right: 'Risk-based detection (user-risk, sign-in-risk)' },
            { left: 'PIM (Privileged Identity Management)', right: 'JIT eligible activation for admin roles' },
            { left: 'B2B Collaboration', right: 'Invite external partners as guest users' },
            { left: 'Entra External ID for customers (B2C)', right: 'Customer-facing identity w/ social logins' }
          ],
          explain: 'Entra = directory. CA = enforcement. Identity Protection = risk scoring. PIM = JIT admin. B2B vs B2C = workforce-guests vs customers.' },
        { type: 'multiselect',
          prompt: 'Pick PHISHING-RESISTANT MFA methods:',
          options: [
            'SMS one-time code',
            'Voice call OTP',
            'Microsoft Authenticator push (no number match)',
            'Authenticator number matching',
            'FIDO2 / passkeys / WebAuthn',
            'Certificate-based authentication (CBA)',
            'Windows Hello for Business'
          ],
          answers: [4, 5, 6],
          explain: 'Phishing-resistant = origin-bound + replay-proof. FIDO2/passkeys + CBA + WHfB. SMS + voice + simple push are bypassable by AitM phishing (EvilProxy). Number-matching strengthens push but still not phishing-resistant by spec.' },
        { type: 'order',
          prompt: 'Conditional Access policy evaluation order:',
          items: [
            '1. User / group assignment matches?',
            '2. Cloud app + action in scope?',
            '3. Conditions evaluated (user risk, sign-in risk, device platform, location, client app, device state)?',
            '4. Apply access controls (block, MFA, compliant device, terms of use)',
            '5. Apply session controls (sign-in frequency, app-enforced restrictions, persistent browser)'
          ],
          explain: 'CA = assignments → cloud apps → conditions → access controls → session controls. Multiple policies combine with most-restrictive winning.' },
        { type: 'fillblank',
          prompt: 'Entra license tier needed for Identity Protection + PIM:',
          answer: ['p2', 'entra id p2', 'azure ad p2'],
          placeholder: 'tier',
          explain: 'Entra P2 (or Microsoft 365 E5). P1 covers Conditional Access + Group-based access management. Free has basic SSO only.' },
        { type: 'choice',
          prompt: 'Block sign-in from impossible geographies (LA to Tokyo in 30 min). Which CA condition?',
          options: [
            'Device platform',
            'Sign-in risk (atypical travel detection)',
            'User risk (leaked credentials)',
            'Client apps'
          ],
          answer: 1,
          explain: 'Identity Protection scores sign-in risk based on atypical travel + unfamiliar IP + anonymous IP + malware-linked IP + leaked credentials. Block or require MFA above thresholds.' }
      ]
    },
    {
      id: 'az-pbq5',
      title: 'PBQ: Network Architecture',
      objective: 'Azure networking',
      steps: [
        { type: 'note', text: 'Design hub-spoke + secure connectivity. Match each service to the right job.' },
        { type: 'dragmatch',
          prompt: 'Match each connectivity choice to scenario.',
          pairs: [
            { left: 'Branch office to Azure over Internet, encrypted', right: 'VPN Gateway (site-to-site IPsec)' },
            { left: 'Datacenter to Azure, private 10 Gbps SLA', right: 'ExpressRoute' },
            { left: 'Reach PaaS service privately, no public IP', right: 'Private Endpoint' },
            { left: 'Two VNets in different regions, low-latency private', right: 'Global VNet Peering' },
            { left: 'RDP/SSH to VM with no public IP', right: 'Azure Bastion' },
            { left: 'Centralize NGFW + threat-intel for hub-spoke egress', right: 'Azure Firewall (Premium)' }
          ],
          explain: 'Memorize each service\'s sweet spot. ExpressRoute = private + SLA. Private Endpoint = PaaS w/o public surface. Bastion = browser-based RDP/SSH.' },
        { type: 'multiselect',
          prompt: 'Layer-7 services for HTTP(S) entry in Azure:',
          options: ['Azure Load Balancer (L4)', 'Application Gateway (regional L7 + WAF)', 'Azure Front Door (global L7 anycast + WAF + CDN)', 'Traffic Manager (DNS only, no L7)', 'NAT Gateway'],
          answers: [1, 2],
          explain: 'AppGW = regional L7. Front Door = global L7. ALB is L4. Traffic Manager is DNS routing. NAT Gateway is egress only.' },
        { type: 'fillblank',
          prompt: 'Service that gives outbound static SNAT IPs without exposing inbound:',
          answer: ['nat gateway', 'natgw', 'azure nat gateway'],
          placeholder: 'service name',
          explain: 'NAT Gateway provides predictable outbound SNAT IPs + scales port budget; no inbound exposure. Replaces default outbound + load-balancer SNAT.' },
        { type: 'order',
          prompt: 'NSG rule evaluation order:',
          items: [
            '1. AzureLoadBalancer + intra-VNet defaults (lowest priority)',
            '2. Match by priority 100-4096, LOWEST number wins',
            '3. First match (Allow or Deny) is final',
            '4. Default rule (DenyAllInbound / AllowVnetInBound / AllowAzureLoadBalancerInBound) at priority 65000-65500 if no match'
          ],
          explain: 'NSG = stateful. Priority ordering matters. Service tags (VirtualNetwork, AzureLoadBalancer, Internet) simplify rule writing.' },
        { type: 'choice',
          prompt: 'Default outbound Internet behavior for a new VM with no Public IP + no NAT Gateway in 2025 Azure?',
          options: [
            'Full Internet access via default outbound (going away)',
            'No Internet — must explicitly add Public IP, NAT Gateway, or Load Balancer w/ outbound rule',
            'Blocked by Azure Firewall by default',
            'Goes through ExpressRoute by default'
          ],
          answer: 1,
          explain: 'Microsoft is removing default outbound access (deprecation Sep 2025). Must use explicit egress: NAT Gateway (recommended), Public IP on VM, or LB outbound rule.' }
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
    },
    {
      id: 'ps-pbq1',
      title: 'PBQ: Cmdlet + Pipeline Reasoning',
      objective: 'Pipeline + objects',
      steps: [
        { type: 'note', text: 'Walk through PowerShell pipeline mechanics.' },
        { type: 'fillblank',
          prompt: 'Automatic variable representing the current pipeline object:',
          answer: ['$_', '$psitem'],
          placeholder: 'variable',
          explain: '$_ (or modern $PSItem) is the current pipeline object inside Where-Object / ForEach-Object scriptblocks.' },
        { type: 'dragmatch',
          prompt: 'Match the cmdlet alias to its full name.',
          pairs: [
            { left: '?', right: 'Where-Object' },
            { left: '%', right: 'ForEach-Object' },
            { left: 'select', right: 'Select-Object' },
            { left: 'gci', right: 'Get-ChildItem' },
            { left: 'gm', right: 'Get-Member' },
            { left: 'ft', right: 'Format-Table' }
          ],
          explain: 'Aliases save typing at the prompt. Use FULL cmdlet names in scripts for clarity + linter happiness.' },
        { type: 'multiselect',
          prompt: 'Operators that are LEGAL PowerShell comparisons:',
          options: ['-eq', '-ne', '==', '-lt', '-gt', '=', '-like', '-match'],
          answers: [0, 1, 3, 4, 6, 7],
          explain: 'PowerShell uses -eq / -ne / -lt / -gt / -le / -ge / -like / -match. NO == operator. = is assignment ONLY.' },
        { type: 'order',
          prompt: 'Pipeline binding modes in cmdlet-binding attempt order:',
          items: [
            '1. ByValue (entire object matches parameter type)',
            '2. ByPropertyName (matching property name on the object)'
          ],
          explain: 'ByValue checked first. If fails, ByPropertyName tried. Get-Help cmdlet -Parameter * reveals which params accept pipeline.' }
      ]
    },
    {
      id: 'ps-pbq2',
      title: 'PBQ: Advanced Function Anatomy',
      objective: 'Functions + parameter validation',
      steps: [
        { type: 'note', text: 'Build a production-grade advanced function. Pick the correct attributes.' },
        { type: 'dragmatch',
          prompt: 'Match each validation attribute to its purpose.',
          pairs: [
            { left: '[ValidateSet(...)]', right: 'Enforces one of a fixed list of values (gives tab completion)' },
            { left: '[ValidateRange(min,max)]', right: 'Numeric range' },
            { left: '[ValidatePattern("regex")]', right: 'Must match regex' },
            { left: '[ValidateScript({...})]', right: 'Arbitrary boolean check (e.g., file exists)' },
            { left: '[ValidateNotNullOrEmpty()]', right: 'Reject null / empty string / empty collection' },
            { left: '[ValidateLength(min,max)]', right: 'String length bounds' }
          ],
          explain: 'Memorize the catalog. Validation runs BEFORE function body — fail fast.' },
        { type: 'multiselect',
          prompt: 'What does [CmdletBinding()] add to a function?',
          options: [
            'Common parameters (-Verbose / -Debug / -ErrorAction / etc.)',
            'Support for $PSCmdlet automatic variable',
            'Ability to support -WhatIf / -Confirm via SupportsShouldProcess',
            'Pipeline-binding via ValueFromPipeline parameter attribute',
            'Built-in encryption',
            'Automatic logging to Sentinel'
          ],
          answers: [0, 1, 2, 3],
          explain: '[CmdletBinding()] converts a basic function into an advanced function. No magic logging or crypto. SupportsShouldProcess opt-in for destructive cmdlets.' },
        { type: 'fillblank',
          prompt: 'Snippet attribute on a parameter to mark it as MANDATORY:',
          answer: ['[parameter(mandatory)]', '[parameter(mandatory=$true)]', 'mandatory'],
          placeholder: '[Parameter(...)]',
          explain: '[Parameter(Mandatory)] (or Mandatory=$true) forces the caller to supply it. Pair with [ValidateNotNullOrEmpty()] for sanity.' },
        { type: 'order',
          prompt: 'Pipeline-aware function lifecycle blocks in correct order:',
          items: ['1. begin { setup once before pipeline }', '2. process { runs per pipeline object }', '3. end { teardown after pipeline done }'],
          explain: 'process block is the per-object handler — REQUIRED for pipeline support. Without it, only the LAST piped object is processed.' }
      ]
    },
    {
      id: 'ps-pbq3',
      title: 'PBQ: Error Handling + Best Practices',
      objective: 'Error handling',
      steps: [
        { type: 'note', text: 'Production scripts need explicit error handling. Choose the right approach for each scenario.' },
        { type: 'choice',
          prompt: 'A non-terminating error from Get-Item — how to force it into try/catch?',
          options: [
            'Add -ErrorAction Stop',
            'Wrap in begin block',
            'Use trap statement only',
            'Cannot be caught'
          ],
          answer: 0,
          explain: '-ErrorAction Stop (or $ErrorActionPreference = "Stop") promotes non-terminating to terminating so try/catch fires.' },
        { type: 'multiselect',
          prompt: 'Valid PowerShell preference variables:',
          options: ['$ErrorActionPreference', '$WarningPreference', '$VerbosePreference', '$DebugPreference', '$InformationPreference', '$ConfirmPreference', '$RandomActionPreference'],
          answers: [0, 1, 2, 3, 4, 5],
          explain: '$RandomActionPreference does not exist. All others control output streams.' },
        { type: 'fillblank',
          prompt: 'Linter command to scan a PowerShell script for issues:',
          answer: ['invoke-scriptanalyzer', 'invoke-scriptanalyzer .\\script.ps1', 'scriptanalyzer'],
          placeholder: 'cmd',
          explain: 'Invoke-ScriptAnalyzer (PSScriptAnalyzer module) flags style, correctness, security issues. Required pre-commit gate in production.' },
        { type: 'order',
          prompt: 'Best-practice order for a destructive cmdlet (e.g., Remove-User):',
          items: [
            '1. param block with [CmdletBinding(SupportsShouldProcess)]',
            '2. Validate input via [ValidateScript({...})]',
            '3. Inside body: if ($PSCmdlet.ShouldProcess($target, "Remove")) { ... }',
            '4. Wrap risky call in try/catch with -ErrorAction Stop',
            '5. Write-Verbose progress + Write-Error on fail',
            '6. Document with comment-based help (.SYNOPSIS / .EXAMPLE)'
          ],
          explain: 'ShouldProcess gives free -WhatIf / -Confirm. Always combine with -ErrorAction Stop in try/catch.' },
        { type: 'dragmatch',
          prompt: 'Match cmdlet to writing-to-stream behavior.',
          pairs: [
            { left: 'Write-Output', right: 'To pipeline (stream 1)' },
            { left: 'Write-Error', right: 'Error stream (2) + $Error[0]' },
            { left: 'Write-Warning', right: 'Warning stream (3)' },
            { left: 'Write-Verbose', right: 'Stream 4, visible only with -Verbose' },
            { left: 'Write-Debug', right: 'Stream 5, visible only with -Debug' },
            { left: 'Write-Information', right: 'Stream 6 (PS 5+); replaces Write-Host in scripts' }
          ],
          explain: 'Avoid Write-Host in libraries — it bypasses the pipeline. Use Write-Output for data + Write-Verbose / Write-Information for diagnostics.' }
      ]
    }
  ]
};

window.LABS = LABS;
