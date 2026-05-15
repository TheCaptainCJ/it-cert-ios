// IT Cert iOS — Flashcards
// Keyed by course id. Each card: { front, back }
// Mobile-optimized: keep both sides short enough to read at a glance.

const FLASHCARDS = {

  // ============================================================
  // A+ Core 1 — 220-1101
  // ============================================================
  aplus1: [
    { front: 'Cat 6a max speed and distance', back: '10 Gbps over 100 meters' },
    { front: 'Cat 6 vs Cat 6a for 10 Gbps', back: 'Cat 6 only to 55m. Cat 6a full 100m.' },
    { front: 'SSH port', back: '22 (TCP)' },
    { front: 'RDP port', back: '3389 (TCP)' },
    { front: 'SMB port', back: '445 (TCP)' },
    { front: 'DNS port', back: '53 (UDP/TCP)' },
    { front: 'HTTPS port', back: '443 (TCP)' },
    { front: 'LDAP / LDAPS ports', back: '389 / 636' },
    { front: 'DHCP ports', back: '67 server, 68 client (UDP)' },
    { front: 'SNMP ports', back: '161 query, 162 trap (UDP)' },
    { front: 'RAID 0 purpose', back: 'Stripe = speed, NO redundancy. Any disk fails = total loss.' },
    { front: 'RAID 1 purpose', back: 'Mirror. 2 disks, 1 copy. Tolerates 1 disk fail.' },
    { front: 'RAID 5 purpose', back: 'Stripe + parity. 3+ disks. Tolerates 1 disk fail.' },
    { front: 'RAID 10 purpose', back: 'Mirror of stripes. 4+ disks. Fast + redundant.' },
    { front: 'WPA3 handshake', back: 'SAE — Simultaneous Authentication of Equals. Defeats offline dictionary attacks.' },
    { front: '2.4 GHz non-overlapping channels', back: '1, 6, 11' },
    { front: 'Type 1 vs Type 2 hypervisor', back: 'Type 1 = bare-metal (ESXi, Hyper-V). Type 2 = hosted on OS (VirtualBox).' },
    { front: 'IaaS vs PaaS vs SaaS', back: 'IaaS = VMs. PaaS = managed runtime. SaaS = finished apps.' },
    { front: 'DDR4 vs DDR5 voltage', back: 'DDR4 = 1.2V. DDR5 = 1.1V.' },
    { front: 'NVMe interface', back: 'PCIe — Gen4 ~7 GB/s, Gen5 ~14 GB/s. Bypasses SATA 600 MB/s ceiling.' },
    { front: 'CompTIA troubleshooting step after "establish theory"', back: 'Test the theory to confirm.' },
    { front: 'PoE+ (802.3at) wattage', back: '30W' },
    { front: 'Single-mode vs multimode fiber', back: 'Single-mode = long distance, laser, yellow. Multimode = short, LED, orange/aqua.' },
    { front: 'PoE 802.3af wattage', back: '15.4W (Type 1)' },
    { front: 'PoE++ 802.3bt wattage', back: 'Up to 100W (Type 4)' },
    { front: '5 GHz Wi-Fi advantage over 2.4 GHz', back: 'More non-overlapping channels, less interference, higher throughput. Shorter range.' },
    { front: 'ATX form factor sizes', back: 'ATX > microATX > mini-ITX. Smaller = fewer expansion slots.' },
    { front: 'CPU socket: Intel uses', back: 'LGA (pins on motherboard).' },
    { front: 'Modern AMD desktop socket', back: 'AM5 (LGA, replaced PGA-style AM4).' },
    { front: 'Thermal paste purpose', back: 'Fills microscopic gaps between CPU IHS and heatsink for heat transfer. Non-conductive.' },
    { front: 'UEFI vs BIOS key advantages', back: 'Secure Boot, GPT >2TB disks, faster boot, mouse-driven setup, network boot.' },
    { front: 'TPM 2.0 purpose', back: 'Hardware-backed key storage. Required for Windows 11, BitLocker, Windows Hello.' },
    { front: 'Display: 24-pin connector on motherboard', back: 'ATX main power.' },
    { front: '8-pin EPS connector', back: 'CPU supplementary power.' },
    { front: 'PCIe 6+2 connector', back: 'GPU supplementary power.' },
    { front: '80 PLUS Gold efficiency target', back: '≥87% at 20/50/100% load.' },
    { front: 'IaaS responsibility split', back: 'Provider: hypervisor + below. Customer: guest OS + above.' },
    { front: 'Type 1 hypervisor examples', back: 'ESXi, Hyper-V, KVM, Xen. Bare-metal.' },
    { front: 'Type 2 hypervisor examples', back: 'VirtualBox, VMware Workstation, Parallels. Runs on host OS.' },
    { front: 'Cloud elasticity', back: 'Scale dynamically with demand — up and down.' },
    { front: 'CompTIA troubleshooting step 1', back: 'Identify the problem (gather info, reproduce, back up).' },
    { front: 'CompTIA troubleshooting step 5', back: 'Verify full functionality + implement preventive measures.' },
    { front: 'CompTIA troubleshooting step 6 (last)', back: 'Document findings, actions, outcomes.' },
    { front: 'APIPA IP range', back: '169.254.0.0/16 — DHCP failed to respond.' },
    { front: 'Subnet mask /28 usable hosts', back: '14' },
    { front: 'IPv4 default subnet for Class C', back: '/24 (255.255.255.0)' },
    { front: 'Loopback IPv4 address', back: '127.0.0.1' },
    { front: 'IPv6 loopback', back: '::1' },
    { front: 'IPv6 address bits', back: '128 (vs 32 in IPv4)' },
    { front: 'Hub vs switch vs router', back: 'Hub L1 dumb repeater. Switch L2 MAC learning. Router L3 between networks.' },
    { front: 'PAT (NAT overload)', back: 'Many private hosts share one public IP via source-port multiplexing.' },
    { front: 'Stateful firewall', back: 'Tracks connection state, auto-permits return traffic for established flows.' },
    { front: 'Patch panel purpose', back: 'Termination point for permanent cable runs — patch cords connect panel to switch ports.' },
    { front: 'Thermal printing technology', back: 'Heat-activated paper or wax/resin ribbon transfer (dye-sub).' },
    { front: 'Inkjet vs laser print', back: 'Inkjet = liquid ink droplets. Laser = toner powder fused with heat.' },
    { front: 'Mobile device synchronization protocol for Exchange', back: 'ActiveSync (HTTPS 443) for mail/contacts/calendar.' },
    { front: 'USB-C Power Delivery max wattage (PD 3.1)', back: 'Up to 240W.' },
    { front: 'Thunderbolt 4 data rate', back: '40 Gbps. Carries video (DP) + USB data + power.' },
    { front: 'eSATA vs internal SATA', back: 'External-rated SATA connector for hot-pluggable external drives. Same protocol.' },
    { front: 'NIC duplex mismatch symptom', back: 'Slow speeds, runt frames, late collisions on one side. Always allow auto-negotiate on both ends.' },
    { front: 'Jumbo frames MTU', back: '9000 bytes typical (vs default 1500). Used in storage networks for throughput.' },
    { front: 'Why use a VLAN?', back: 'Logical segmentation, broadcast domain isolation, security separation, simpler management.' }
  ],

  // ============================================================
  // A+ Core 2 — 220-1102
  // ============================================================
  aplus2: [
    { front: 'Windows edition required to join AD domain', back: 'Pro / Enterprise / Education. Home cannot.' },
    { front: 'ipconfig /flushdns purpose', back: 'Clears the local DNS resolver cache.' },
    { front: 'sfc /scannow purpose', back: 'Scans + replaces corrupt protected Windows system files.' },
    { front: 'When NTFS and Share permissions conflict', back: 'Most restrictive wins.' },
    { front: 'NTFS Allow + Deny on same user', back: 'Deny always overrides Allow.' },
    { front: 'Ransomware definition', back: 'Malware that encrypts files and demands payment.' },
    { front: 'Worm vs virus', back: 'Worm self-replicates over network. Virus needs a host file + execution.' },
    { front: 'Whaling attack target', back: 'Executives / high-value individuals.' },
    { front: 'Pretexting', back: 'Invented scenario to manipulate target (e.g., fake IT call).' },
    { front: 'Evil twin attack', back: 'Rogue Wi-Fi AP impersonating a legit SSID.' },
    { front: '3-2-1 backup rule', back: '3 copies, 2 different media types, 1 offsite.' },
    { front: 'Full vs incremental vs differential', back: 'Full = everything. Incremental = since last backup. Differential = since last full.' },
    { front: 'Safest HDD disposal', back: 'Physical destruction (shred / incinerate). Format does NOT wipe data.' },
    { front: 'BitLocker hardware requirement', back: 'TPM 2.0 (desktop standard).' },
    { front: 'SDS / MSDS document', back: 'Safety Data Sheet — chemical handling, hazards, disposal.' },
    { front: 'Linux: list processes interactively', back: 'top (or htop)' },
    { front: 'Linux: change file permissions to rwxr-xr-x', back: 'chmod 755 file' },
    { front: 'Linux: add user to sudo group safely', back: 'usermod -aG sudo user (the -a is critical)' },
    { front: 'macOS full-disk encryption', back: 'FileVault' },
    { front: 'macOS built-in backup', back: 'Time Machine' },
    { front: 'UAC purpose', back: 'User Account Control — prompts before elevation.' }
  ],

  // ============================================================
  // Network+ — N10-009
  // ============================================================
  netplus: [
    { front: 'OSI Layer 3', back: 'Network. IP addressing + routing. Routers.' },
    { front: 'OSI Layer 2', back: 'Data Link. MAC addresses, frames. Switches.' },
    { front: 'OSI Layer 4', back: 'Transport. TCP/UDP, ports, segments.' },
    { front: 'OSI mnemonic top-down', back: 'All People Seem To Need Data Processing.' },
    { front: 'Private IP ranges', back: '10/8, 172.16/12, 192.168/16' },
    { front: 'APIPA range', back: '169.254.0.0/16 (DHCP failed)' },
    { front: '/24 usable hosts', back: '254 (256 - 2)' },
    { front: '/28 usable hosts', back: '14' },
    { front: '/30 usable hosts', back: '2 (point-to-point links)' },
    { front: 'IPv6 link-local prefix', back: 'fe80::/10' },
    { front: 'IPv6 multicast prefix', back: 'ff00::/8 (no broadcast in IPv6)' },
    { front: 'STP purpose', back: 'Prevent Layer 2 switching loops.' },
    { front: '802.1Q', back: 'VLAN tagging standard.' },
    { front: 'OSPF metric', back: 'Cost (link-state, based on bandwidth).' },
    { front: 'BGP role', back: 'Path-vector routing between autonomous systems on the Internet.' },
    { front: 'Administrative distance: lower or higher wins', back: 'Lower wins. OSPF=110, RIP=120 → OSPF preferred.' },
    { front: 'PAT (NAT overload)', back: 'Many internal hosts share ONE public IP via source-port multiplexing.' },
    { front: 'Syslog port', back: 'UDP 514' },
    { front: 'NTP port', back: 'UDP 123' },
    { front: 'Wi-Fi 6 / 6E technical name', back: '802.11ax / 802.11ax in 6 GHz band' },
    { front: 'TDR vs OTDR', back: 'TDR = copper distance to fault. OTDR = fiber distance to fault.' },
    { front: '802.1X', back: 'Port-based network access control. Supplicant → authenticator → RADIUS.' }
  ],

  // ============================================================
  // Security+ — SY0-701
  // ============================================================
  secplus: [
    { front: 'CIA triad', back: 'Confidentiality, Integrity, Availability.' },
    { front: 'AAA', back: 'Authentication, Authorization, Accounting.' },
    { front: 'Hash provides which CIA property', back: 'Integrity (detect tampering).' },
    { front: 'Symmetric encryption examples', back: 'AES, ChaCha20. (3DES legacy, DES broken)' },
    { front: 'Asymmetric encryption examples', back: 'RSA, ECC, Diffie-Hellman.' },
    { front: 'Password hash best practices', back: 'Salt + slow KDF (bcrypt, scrypt, Argon2, PBKDF2).' },
    { front: 'Password spraying vs credential stuffing', back: 'Spraying = 1 password against many users. Stuffing = leaked password pairs reused.' },
    { front: 'SQLi defense', back: 'Parameterized queries / prepared statements + input validation.' },
    { front: 'XSS', back: 'Cross-site scripting — attacker JS runs in victim browser. Sanitize output.' },
    { front: 'CSRF', back: 'Forged request from authenticated session. Defense: CSRF tokens, SameSite cookies.' },
    { front: 'SSRF', back: 'Server makes attacker-chosen outbound requests. Defense: allowlist + metadata blocks.' },
    { front: 'Risk = ?', back: 'Threat × Vulnerability × Impact' },
    { front: 'ALE formula', back: 'ALE = SLE × ARO' },
    { front: 'RTO vs RPO', back: 'RTO = max downtime acceptable. RPO = max data-loss window acceptable.' },
    { front: 'MFA factor categories', back: 'Know, have, are, somewhere, do. Must combine 2+ different.' },
    { front: 'Order of volatility', back: 'Registers/cache → RAM → swap → disk → backups.' },
    { front: 'Cyber Kill Chain stages', back: 'Recon, Weaponize, Deliver, Exploit, Install, C2, Actions on Obj.' },
    { front: 'MITRE ATT&CK', back: 'Knowledge base of adversary TTPs (Tactics, Techniques, Procedures).' },
    { front: 'PKI revocation methods', back: 'CRL and OCSP.' },
    { front: 'NIST IR phase 1', back: 'Preparation.' },
    { front: 'GDPR scope', back: 'EU personal data; data subject rights, breach notice 72h.' },
    { front: 'Zero Trust core principle', back: 'Never trust, always verify. Per-request identity + device + context.' }
  ],

  // ============================================================
  // Linux+ — XK0-005
  // ============================================================
  linuxplus: [
    { front: '/etc purpose', back: 'System configuration files.' },
    { front: '/var purpose', back: 'Variable data — logs, spool, mail queues.' },
    { front: '/proc and /sys', back: 'Virtual filesystems exposing kernel + hardware info.' },
    { front: 'chmod 755 means', back: 'Owner rwx, group r-x, other r-x.' },
    { front: 'SUID bit effect', back: 'Executable runs as the file owner (often root). Example: /usr/bin/passwd.' },
    { front: 'Sticky bit on a dir (e.g., /tmp)', back: 'Only file owner can delete their own files.' },
    { front: '/etc/shadow contains', back: 'Hashed user passwords. Readable only by root.' },
    { front: 'Add user to group safely', back: 'usermod -aG groupname user (the -a appends)' },
    { front: 'systemd: enable service at boot', back: 'systemctl enable servicename' },
    { front: 'View live logs for one service', back: 'journalctl -u servicename -f' },
    { front: 'Show listening sockets with PIDs', back: 'ss -tunlp' },
    { front: 'Test a port from CLI', back: 'nc -vz host port  OR  curl -v telnet://host:port' },
    { front: 'Debian package manager', back: 'apt (and dpkg low-level)' },
    { front: 'RHEL/Fedora package manager', back: 'dnf (and rpm low-level)' },
    { front: 'Persistent mounts file', back: '/etc/fstab' },
    { front: 'LVM order', back: 'Physical Volume → Volume Group → Logical Volume' },
    { front: 'Generate modern SSH key', back: 'ssh-keygen -t ed25519' },
    { front: 'Disable root SSH login', back: 'PermitRootLogin no in /etc/ssh/sshd_config' },
    { front: 'Check SELinux mode', back: 'getenforce  (Enforcing / Permissive / Disabled)' },
    { front: 'Show real-time CPU/IO/load', back: 'top, htop, vmstat, iostat, sar' },
    { front: 'Cut 3rd CSV column', back: 'cut -d, -f3 file.csv' }
  ],

  // ============================================================
  // Cloud+ — CV0-004
  // ============================================================
  cloudplus: [
    { front: 'IaaS responsibility split', back: 'Provider: hypervisor + below. Customer: guest OS + above (incl IAM, data).' },
    { front: 'SaaS responsibility split', back: 'Provider runs everything; customer manages data + identity only.' },
    { front: 'Block vs file vs object storage', back: 'Block = disk attached to VM. File = SMB/NFS share. Object = key-based HTTP API (S3, Blob).' },
    { front: 'Spot / preemptible instances', back: 'Deep discount; provider can reclaim with little notice.' },
    { front: 'Storage tier with longest retrieval latency', back: 'Archive (Glacier Deep Archive / Azure Archive). Hours to retrieve.' },
    { front: 'Kubernetes Service: ClusterIP', back: 'In-cluster-only (default). Not reachable from outside.' },
    { front: 'Kubernetes Service: LoadBalancer', back: 'Provisions a cloud LB with external IP.' },
    { front: 'Kubernetes Pod', back: 'Smallest deployable unit. 1+ containers sharing network + storage.' },
    { front: 'Security group vs NACL', back: 'SG = stateful, instance-level. NACL = stateless, subnet-level.' },
    { front: 'Private connectivity to cloud bypassing Internet', back: 'AWS Direct Connect / Azure ExpressRoute / GCP Interconnect.' },
    { front: 'Vertical vs horizontal scaling', back: 'Vertical = bigger box. Horizontal = more boxes behind LB. Stateless apps scale horizontally.' },
    { front: 'CSPM tool purpose', back: 'Cloud Security Posture Management — finds misconfigs (open buckets, weak IAM).' },
    { front: 'CWPP tool purpose', back: 'Cloud Workload Protection Platform — runtime protection for VMs/containers.' },
    { front: 'IaC tool: provider-agnostic, HCL', back: 'Terraform.' },
    { front: 'CapEx vs OpEx', back: 'CapEx = up-front purchase. OpEx = pay-as-you-go. Cloud is OpEx.' },
    { front: 'Multi-AZ design protects against', back: 'Single-AZ datacenter failure (one AZ down). Region outage still kills it.' },
    { front: 'DR strategy with hot multi-region', back: 'Multi-site active-active. Lowest RTO/RPO, highest cost.' },
    { front: 'CMK / BYOK', back: 'Customer-Managed Keys / Bring Your Own Key — customer controls rotation + access.' },
    { front: 'Egress cost killer', back: 'Internet egress. In-region/same-AZ traffic is cheap or free.' },
    { front: 'Service quotas / limits effect', back: 'Silent throttling. Always check before scale events.' }
  ],

  // ============================================================
  // AZ-900 — Azure Fundamentals
  // ============================================================
  az900: [
    { front: 'Azure region pair purpose', back: 'Geo-redundant storage replicates between paired regions. Paired by Microsoft, not user-selectable.' },
    { front: 'Availability Zone', back: 'Physically separate datacenter within a region. Most regions have 3.' },
    { front: 'Azure resource hierarchy', back: 'Management Group → Subscription → Resource Group → Resource.' },
    { front: 'Resource group rules', back: 'Resource belongs to exactly ONE RG. RG is logical container; deleting RG deletes resources.' },
    { front: 'Azure VM service model', back: 'IaaS.' },
    { front: 'App Service service model', back: 'PaaS (managed web/API hosting).' },
    { front: 'Microsoft 365 service model', back: 'SaaS.' },
    { front: 'Microsoft Entra ID', back: 'Azure cloud identity. SSO, MFA, Conditional Access. Formerly Azure AD.' },
    { front: 'Azure RBAC vs Azure Policy', back: 'RBAC = who can do what. Policy = what configurations are allowed to exist.' },
    { front: 'Resource lock types', back: 'ReadOnly and CanNotDelete (Delete).' },
    { front: 'Cheapest storage redundancy', back: 'LRS (3 copies in 1 datacenter).' },
    { front: 'Most resilient redundancy', back: 'GZRS (zone-redundant + paired-region replication).' },
    { front: 'Blob hot vs cool vs archive', back: 'Trade-off: lower storage cost = higher retrieval latency/cost.' },
    { front: 'Azure SLA composite calculation', back: 'Multiply SLAs of dependent services. 99.9% × 99.9% = 99.8%.' },
    { front: 'Pricing Calculator vs Cost Management', back: 'Pricing Calc = ESTIMATE before deploy. Cost Mgmt = ANALYZE actual spend.' },
    { front: 'Azure Advisor', back: 'Recommendations across cost, security, reliability, performance, operational excellence.' },
    { front: 'Azure Hybrid Benefit', back: 'Apply existing on-prem Windows Server / SQL Server licenses to Azure compute. Big savings.' },
    { front: 'ExpressRoute vs VPN Gateway', back: 'ExpressRoute = private circuit. VPN Gateway = encrypted tunnel over Internet.' },
    { front: 'Defender for Cloud purpose', back: 'CSPM + CWPP for Azure (and multi-cloud).' },
    { front: 'Microsoft Sentinel', back: 'Cloud-native SIEM + SOAR.' },
    { front: 'Service Health vs Resource Health', back: 'Service Health = Azure-wide incidents. Resource Health = single resource state.' }
  ],

  // ============================================================
  // PowerShell Mastery
  // ============================================================
  powershell: [
    { front: 'PowerShell equality operator', back: '-eq  (NOT == or =)' },
    { front: 'Verb-Noun naming', back: 'Every cmdlet follows Verb-Noun: Get-Process, Set-Location, New-Item.' },
    { front: 'List all approved verbs', back: 'Get-Verb' },
    { front: '$_ meaning', back: 'Current pipeline object (also $PSItem).' },
    { front: 'Filter pipeline objects', back: 'Where-Object { $_.CPU -gt 100 }' },
    { front: 'Pick first N objects', back: 'Select-Object -First N' },
    { front: 'Iterate pipeline', back: 'ForEach-Object { ... } (alias %)' },
    { front: 'View help on cmdlet', back: 'Get-Help Get-Process -Full' },
    { front: 'Search cmdlets by verb', back: 'Get-Command -Verb Get' },
    { front: 'Modern WMI replacement', back: 'Get-CimInstance (replaces Get-WmiObject)' },
    { front: 'Service status', back: 'Get-Service spooler' },
    { front: 'Kill process by name', back: 'Stop-Process -Name notepad -Force' },
    { front: 'Test TCP port reachability', back: 'Test-NetConnection host -Port 443' },
    { front: 'Call REST API, parse JSON', back: 'Invoke-RestMethod -Uri https://api...' },
    { front: 'Run command on remote computer', back: 'Invoke-Command -ComputerName srv01 -ScriptBlock { ... }' },
    { front: 'Persistent remote session', back: 'New-PSSession -ComputerName host  (then Invoke-Command -Session $s)' },
    { front: 'Force script to stop on errors', back: '$ErrorActionPreference = "Stop"' },
    { front: 'Simulate destructive action', back: 'Add -WhatIf parameter.' },
    { front: 'Install module current user only', back: 'Install-Module Name -Scope CurrentUser' },
    { front: 'Lint a script', back: 'Invoke-ScriptAnalyzer .\\script.ps1  (PSScriptAnalyzer)' },
    { front: 'Get failed-logon events last day', back: 'Get-WinEvent -FilterHashtable @{LogName="Security"; Id=4625; StartTime=(Get-Date).AddDays(-1)}' },
    { front: 'Secrets in scripts: do or do not', back: 'Do NOT plaintext. Use SecretManagement module or Get-Credential.' }
  ]
};

window.FLASHCARDS = FLASHCARDS;
