// IT Cert iOS — Course data
// 6 CompTIA certs + 1 Microsoft entry cert + PowerShell mastery track
// Each course: { id, name, short, code, badge, type, desc, lessons[], quiz[] }
// Lesson body uses inline HTML. Quiz: { q, options[], answer (idx), explain }

const COURSES = [
  // ============================================================
  // CompTIA A+ Core 1 (220-1101)
  // ============================================================
  {
    id: 'aplus1',
    name: 'CompTIA A+ Core 1',
    short: 'A+ Core 1',
    code: '220-1101',
    badge: 'CompTIA',
    type: 'comptia',
    desc: 'Mobile devices, networking, hardware, virtualization, troubleshooting.',
    lessons: [
      {
        title: '1. Mobile Devices',
        body: `
          <h2>Laptop hardware</h2>
          <p>Laptops use compact, often proprietary parts. Key replaceable components:</p>
          <ul>
            <li><b>Battery</b> — Li-ion; cycle count predicts life.</li>
            <li><b>Keyboard / touchpad</b> — ribbon-cable connected.</li>
            <li><b>RAM (SO-DIMM)</b> — DDR4/DDR5 small form-factor.</li>
            <li><b>Storage</b> — 2.5" SATA, M.2 SATA, or M.2 NVMe (PCIe).</li>
            <li><b>Display</b> — LCD (TN/IPS) or OLED; backlight + inverter (older).</li>
            <li><b>Wireless card</b> — usually M.2 with antenna leads.</li>
          </ul>
          <h2>Mobile device types</h2>
          <p>Smartphones, tablets, wearables, e-readers, GPS. Mostly soldered, sealed batteries.</p>
          <h2>Connection types</h2>
          <ul>
            <li><b>USB-C</b> — universal; power + data + DisplayPort.</li>
            <li><b>Lightning</b> — Apple proprietary (being phased out).</li>
            <li><b>Bluetooth</b> — short-range pairing.</li>
            <li><b>NFC</b> — Apple Pay/Google Pay tap.</li>
            <li><b>Hotspot / tethering</b> — phone shares cellular to other devices.</li>
          </ul>
        `
      },
      {
        title: '2. Networking — Cables & Connectors',
        body: `
          <h2>Copper cabling</h2>
          <ul>
            <li><b>Cat 5e</b> — up to 1 Gbps, 100m.</li>
            <li><b>Cat 6</b> — 1 Gbps full / 10 Gbps to 55m.</li>
            <li><b>Cat 6a</b> — 10 Gbps to 100m.</li>
            <li><b>Coaxial (RG-6)</b> — cable TV / cable modem.</li>
          </ul>
          <h2>Fiber</h2>
          <ul>
            <li><b>Single-mode</b> — long distance (km+), yellow jacket, laser.</li>
            <li><b>Multimode</b> — short runs, orange/aqua, LED.</li>
            <li>Connectors: <code>LC</code>, <code>SC</code>, <code>ST</code>.</li>
          </ul>
          <h2>Connector types</h2>
          <p><b>RJ45</b> = Ethernet (8 pins). <b>RJ11</b> = phone (6P2C/4C). <b>F-type</b> = coax screw-on.</p>
          <h2>Wiring standards</h2>
          <p><b>T568A</b> and <b>T568B</b> — same on both ends = straight-through. Different = crossover (rare, MDI-X auto handles).</p>
        `
      },
      {
        title: '3. TCP/IP, Ports, Protocols',
        body: `
          <h2>Common ports</h2>
          <table style="width:100%;font-size:14px"><tr><th align="left">Port</th><th align="left">Protocol</th></tr>
          <tr><td>20/21</td><td>FTP</td></tr>
          <tr><td>22</td><td>SSH / SFTP</td></tr>
          <tr><td>23</td><td>Telnet (insecure)</td></tr>
          <tr><td>25</td><td>SMTP</td></tr>
          <tr><td>53</td><td>DNS</td></tr>
          <tr><td>67/68</td><td>DHCP</td></tr>
          <tr><td>80</td><td>HTTP</td></tr>
          <tr><td>110</td><td>POP3</td></tr>
          <tr><td>143</td><td>IMAP</td></tr>
          <tr><td>161/162</td><td>SNMP</td></tr>
          <tr><td>389</td><td>LDAP</td></tr>
          <tr><td>443</td><td>HTTPS</td></tr>
          <tr><td>445</td><td>SMB</td></tr>
          <tr><td>3389</td><td>RDP</td></tr>
          </table>
          <h2>TCP vs UDP</h2>
          <p><b>TCP</b> = reliable, ordered, 3-way handshake (SYN, SYN-ACK, ACK). <b>UDP</b> = fire-and-forget, lower latency (DNS, VoIP, streaming).</p>
        `
      },
      {
        title: '4. Wireless Networking',
        body: `
          <h2>802.11 standards</h2>
          <ul>
            <li><b>Wi-Fi 4 (802.11n)</b> — 2.4/5 GHz, up to 600 Mbps.</li>
            <li><b>Wi-Fi 5 (802.11ac)</b> — 5 GHz, up to ~3.5 Gbps.</li>
            <li><b>Wi-Fi 6 (802.11ax)</b> — 2.4/5 GHz, OFDMA, better dense env.</li>
            <li><b>Wi-Fi 6E</b> — adds 6 GHz band.</li>
          </ul>
          <h2>Frequencies</h2>
          <p><b>2.4 GHz</b> — longer range, more interference, 3 non-overlapping channels (1, 6, 11).</p>
          <p><b>5 GHz</b> — shorter range, less interference, many channels.</p>
          <h2>Security</h2>
          <ul>
            <li><b>WEP</b> — broken, never use.</li>
            <li><b>WPA</b> — TKIP, deprecated.</li>
            <li><b>WPA2</b> — AES, current minimum.</li>
            <li><b>WPA3</b> — SAE handshake, current best.</li>
          </ul>
        `
      },
      {
        title: '5. Internet Connection Types',
        body: `
          <ul>
            <li><b>DSL</b> — over phone lines, asymmetric usually.</li>
            <li><b>Cable</b> — over coax (DOCSIS), shared bandwidth.</li>
            <li><b>Fiber (FTTH)</b> — fastest, symmetric.</li>
            <li><b>Satellite</b> — rural; latency issue (GEO ~600ms, LEO/Starlink ~30ms).</li>
            <li><b>Cellular</b> — 4G LTE / 5G hotspot.</li>
            <li><b>WISP</b> — fixed wireless ISP.</li>
          </ul>
          <h2>Network types</h2>
          <p><b>LAN</b> = local. <b>WAN</b> = wide area (Internet). <b>MAN</b> = metropolitan. <b>PAN</b> = personal (Bluetooth). <b>WLAN</b> = wireless LAN. <b>SAN</b> = storage area network.</p>
        `
      },
      {
        title: '6. Network Hardware',
        body: `
          <ul>
            <li><b>Router</b> — layer 3, moves traffic between networks.</li>
            <li><b>Switch</b> — layer 2, MAC-address learning, full duplex.</li>
            <li><b>Hub</b> — layer 1, repeats to all ports (legacy).</li>
            <li><b>Access point (WAP)</b> — wireless bridge to wired LAN.</li>
            <li><b>Firewall</b> — filter traffic by rules; stateful tracks connections.</li>
            <li><b>Patch panel</b> — termination point for cable runs.</li>
            <li><b>PoE injector / switch</b> — Power over Ethernet for cameras, APs, phones.</li>
            <li><b>SDN</b> — software-defined networking; centralized control plane.</li>
          </ul>
        `
      },
      {
        title: '7. RAM Types',
        body: `
          <ul>
            <li><b>DDR3</b> — 240-pin DIMM, 204-pin SO-DIMM (laptop). 1.5V.</li>
            <li><b>DDR4</b> — 288-pin DIMM, 260-pin SO-DIMM. 1.2V.</li>
            <li><b>DDR5</b> — 288-pin DIMM (new keying), 262-pin SO-DIMM. 1.1V.</li>
            <li><b>ECC</b> — Error-Correcting Code, used in servers.</li>
            <li><b>Buffered/Registered</b> — server RAM with register between controller and modules.</li>
          </ul>
          <p>Always match: type (DDRx), speed (MHz), and capacity. Mismatched modules run at slowest.</p>
        `
      },
      {
        title: '8. Storage Devices',
        body: `
          <h2>Drive types</h2>
          <ul>
            <li><b>HDD</b> — spinning platters; 5400 / 7200 / 10K / 15K RPM.</li>
            <li><b>SSD (SATA)</b> — 2.5" form factor, 600 MB/s ceiling.</li>
            <li><b>SSD (M.2 SATA)</b> — gumstick, same speed cap as SATA.</li>
            <li><b>NVMe (M.2 PCIe)</b> — much faster (Gen3 ~3.5 GB/s, Gen4 ~7 GB/s, Gen5 ~14 GB/s).</li>
          </ul>
          <h2>RAID</h2>
          <ul>
            <li><b>RAID 0</b> — stripe, speed, NO redundancy.</li>
            <li><b>RAID 1</b> — mirror, 2 disks, 1 copy.</li>
            <li><b>RAID 5</b> — stripe + parity, needs 3+ disks, tolerates 1 fail.</li>
            <li><b>RAID 10</b> — mirror of stripes, fast + redundant, 4+ disks.</li>
          </ul>
        `
      },
      {
        title: '9. Motherboards, CPUs, Cooling',
        body: `
          <h2>Form factors</h2>
          <p>ATX (large), microATX, mini-ITX (smallest mainstream).</p>
          <h2>CPU sockets</h2>
          <p>Intel uses LGA (pins on board). AMD uses PGA or AM5 LGA. Mismatched = no boot.</p>
          <h2>Chipset</h2>
          <p>Northbridge/Southbridge merged on modern CPUs; chipset (PCH) handles I/O.</p>
          <h2>Cooling</h2>
          <ul>
            <li><b>Air</b> — heatsink + fan; thermal paste required.</li>
            <li><b>Liquid (AIO)</b> — pump + radiator; better for high-TDP CPUs.</li>
          </ul>
          <h2>BIOS/UEFI</h2>
          <p>UEFI = modern firmware. Supports Secure Boot, GPT disks &gt; 2 TB, faster boot. Settings: boot order, virtualization (VT-x / AMD-V), TPM.</p>
        `
      },
      {
        title: '10. Power Supplies',
        body: `
          <h2>Wattage & efficiency</h2>
          <p>Pick wattage to cover system load + headroom. <b>80 PLUS</b> ratings: Bronze, Silver, Gold, Platinum, Titanium.</p>
          <h2>Connectors</h2>
          <ul>
            <li><b>24-pin ATX</b> — main board power.</li>
            <li><b>8-pin EPS</b> — CPU power.</li>
            <li><b>PCIe 6+2</b> — GPU power.</li>
            <li><b>SATA</b> — drives.</li>
            <li><b>Molex</b> — legacy.</li>
          </ul>
          <h2>Modular types</h2>
          <p>Modular, semi-modular, non-modular. Modular = detach unused cables.</p>
        `
      },
      {
        title: '11. Virtualization & Cloud',
        body: `
          <h2>Hypervisors</h2>
          <ul>
            <li><b>Type 1 (bare-metal)</b> — runs on hardware directly. ESXi, Hyper-V, KVM, Xen.</li>
            <li><b>Type 2 (hosted)</b> — runs on top of OS. VirtualBox, VMware Workstation.</li>
          </ul>
          <h2>Cloud models</h2>
          <ul>
            <li><b>IaaS</b> — VMs, storage, networks (AWS EC2, Azure VMs).</li>
            <li><b>PaaS</b> — managed runtime (App Service, Heroku).</li>
            <li><b>SaaS</b> — finished apps (Microsoft 365, Salesforce).</li>
          </ul>
          <h2>Deployment</h2>
          <p>Public, private, hybrid, community. Key concepts: elasticity, on-demand, metered, shared resources.</p>
        `
      },
      {
        title: '12. Troubleshooting Methodology',
        body: `
          <h2>CompTIA 6-step method</h2>
          <ol>
            <li><b>Identify</b> the problem (gather info, reproduce, back up).</li>
            <li><b>Establish a theory</b> (probable cause; question the obvious).</li>
            <li><b>Test the theory</b> to confirm. If confirmed → fix. If not → new theory or escalate.</li>
            <li><b>Plan of action</b> to resolve.</li>
            <li><b>Verify</b> full functionality; implement preventive measures.</li>
            <li><b>Document</b> findings, actions, outcomes.</li>
          </ol>
          <blockquote>Always consider corporate policies, procedures, and impacts before applying changes.</blockquote>
        `
      }
    ],
    quiz: [
      { q: 'A user reports their laptop will not charge. The LED indicator is off when AC is plugged in. What should you check FIRST?', options: ['Replace the battery', 'Verify the AC adapter and outlet', 'Reinstall the OS', 'Replace the motherboard'], answer: 1, explain: 'Always start with the simplest, cheapest test — outlet and adapter — before swapping internal parts.' },
      { q: 'Which port is used by SSH?', options: ['21', '22', '23', '25'], answer: 1, explain: 'SSH = 22. FTP = 21, Telnet = 23, SMTP = 25.' },
      { q: 'A user needs 10 Gbps over 90 meters of copper cable. Which is BEST?', options: ['Cat 5e', 'Cat 6', 'Cat 6a', 'Coaxial RG-6'], answer: 2, explain: 'Cat 6a supports 10 Gbps over the full 100 m. Cat 6 only does 10 Gbps to ~55 m.' },
      { q: 'Which RAID level provides striping with NO redundancy?', options: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'], answer: 0, explain: 'RAID 0 stripes for speed. Lose any disk → lose all data.' },
      { q: 'Which wireless security protocol uses SAE (Simultaneous Authentication of Equals)?', options: ['WEP', 'WPA', 'WPA2', 'WPA3'], answer: 3, explain: 'WPA3 introduced SAE, replacing the 4-way handshake to defeat offline dictionary attacks.' },
      { q: 'A technician is replacing a CPU. Which is required between the CPU and heatsink?', options: ['Conductive paste', 'Thermal paste', 'Rubber gasket', 'Silicone sealant'], answer: 1, explain: 'Thermal paste (non-conductive) fills microscopic gaps for heat transfer.' },
      { q: 'What does PoE provide over Ethernet cable?', options: ['Audio', 'Power and data', 'Video only', 'Fiber signaling'], answer: 1, explain: 'PoE delivers DC power alongside data — common for IP phones, APs, cameras.' },
      { q: 'Which cloud service model gives you the underlying OS to manage?', options: ['SaaS', 'PaaS', 'IaaS', 'FaaS'], answer: 2, explain: 'IaaS = virtual machines; you manage OS and up. PaaS abstracts the OS.' },
      { q: 'A workstation has DDR4 slots. What RAM is compatible?', options: ['DDR3 SO-DIMM', 'DDR4 DIMM', 'DDR5 DIMM', 'Any DDR'], answer: 1, explain: 'DDR generations use different keying — physically incompatible.' },
      { q: 'In CompTIA troubleshooting, AFTER establishing a theory, the next step is to:', options: ['Document findings', 'Test the theory', 'Implement preventive measures', 'Escalate'], answer: 1, explain: 'Step 3 is test the theory. Document is last.' },
      { q: 'Which fiber connector is square and push-pull?', options: ['LC', 'SC', 'ST', 'F-type'], answer: 1, explain: 'SC = Square Connector. LC is smaller (Lucent). ST is bayonet.' },
      { q: 'Which protocol uses UDP port 53?', options: ['HTTP', 'DNS', 'SNMP', 'DHCP'], answer: 1, explain: 'DNS uses UDP/53 for queries (TCP/53 for zone transfers).' },
      { q: 'A user reports slow Wi-Fi in a dense office. Which band typically performs better in this scenario?', options: ['2.4 GHz', '5 GHz', '900 MHz', 'AM radio'], answer: 1, explain: '5 GHz has more non-overlapping channels and less interference indoors.' },
      { q: 'Which storage interface is fastest?', options: ['SATA III SSD', 'M.2 SATA SSD', 'NVMe PCIe Gen4', '7200 RPM HDD'], answer: 2, explain: 'NVMe over PCIe bypasses SATA limits — Gen4 hits ~7 GB/s.' },
      { q: 'Which is a Type 1 hypervisor?', options: ['VirtualBox', 'VMware Workstation', 'ESXi', 'Parallels Desktop'], answer: 2, explain: 'ESXi runs on bare metal. The others are Type 2 hosted on an OS.' },
      { q: 'A laptop screen shows a faint image only when a flashlight is shined on it. Most likely failure?', options: ['Bad GPU', 'Failed backlight / inverter', 'Dead RAM', 'Broken keyboard'], answer: 1, explain: 'Image present but no backlight = inverter/LED backlight failure. Common on older LCDs.' },
      { q: 'M.2 NVMe drive is installed but does not appear in BIOS. FIRST step?', options: ['Replace motherboard', 'Verify the slot supports NVMe (some are SATA-only) and is enabled in BIOS', 'Buy a different OS', 'Reflash GPU'], answer: 1, explain: 'M.2 slots may be SATA-only, NVMe-only, or both. Check motherboard manual + BIOS settings.' },
      { q: 'A printer prints faded text and ghost images on every page. Likely component?', options: ['Fuser', 'Toner cartridge / drum unit', 'Pickup roller', 'Ribbon cable'], answer: 1, explain: 'Faded + ghosting = drum/toner worn or low. Replace cartridge and check drum unit.' },
      { q: 'Which display connector carries video AND USB-PD?', options: ['VGA', 'DVI-D', 'USB-C (DisplayPort Alt Mode)', 'HDMI 1.4'], answer: 2, explain: 'USB-C Alt Mode carries DisplayPort signal + USB data + power.' },
      { q: 'Default subnet mask for a class C network?', options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'], answer: 2, explain: 'Class C default = /24 = 255.255.255.0.' },
      { q: 'A SOHO router gives 192.168.1.x to clients. Which DHCP scope is in use?', options: ['10/8', '172.16/12', '192.168/16', '169.254/16'], answer: 2, explain: '192.168.0.0/16 is RFC 1918 private space typical for home/SOHO.' },
      { q: 'A user sees 169.254.x.x as their IP. What happened?', options: ['Static config', 'DHCP server unreachable; APIPA assigned', 'Multicast issue', 'IPv6 only'], answer: 1, explain: 'APIPA = automatic private addressing when no DHCP responds.' },
      { q: 'Which port should be open to access a corporate Outlook mailbox via Exchange ActiveSync over the Internet?', options: ['25', '110', '443', '993'], answer: 2, explain: 'ActiveSync uses HTTPS (443). IMAP=143/993, POP=110/995, SMTP=25/587.' },
      { q: 'Maximum cable length for standard Ethernet over Cat 6 at 1 Gbps?', options: ['55 m', '100 m', '150 m', '300 m'], answer: 1, explain: '1 Gbps standard run = 100 m on Cat 5e/6/6a.' },
      { q: 'A tech needs to terminate Ethernet keystone jacks at a wall plate. Which tool?', options: ['Crimper', 'Punch-down tool with 110 blade', 'Cable tester only', 'Loopback plug'], answer: 1, explain: 'Punch-down tool with 110 blade seats individual wires into keystone IDC slots.' },
      { q: 'Which IPv6 address type replaces IPv4 broadcast?', options: ['Anycast', 'Multicast', 'Unicast', 'Link-local'], answer: 1, explain: 'IPv6 has no broadcast — multicast handles one-to-many.' },
      { q: 'TPM 2.0 provides which?', options: ['DDoS protection', 'Hardware-backed key storage for disk encryption and platform integrity', 'Faster CPU clock', 'WiFi roaming'], answer: 1, explain: 'TPM stores keys / measures boot. BitLocker, Windows Hello, and Secure Boot all rely on it.' },
      { q: 'A motherboard has a CMOS battery dead. What symptom is MOST likely?', options: ['No POST at all', 'BIOS settings reset on every boot (date/time wrong, boot order lost)', 'Blue screen during gaming', 'Wi-Fi disconnects'], answer: 1, explain: 'CMOS battery preserves BIOS settings + clock when power is removed.' },
      { q: 'Which expansion bus is used by modern GPUs?', options: ['PCI', 'AGP', 'PCIe x16', 'ISA'], answer: 2, explain: 'PCIe x16 is the standard discrete-GPU slot since ~2005.' },
      { q: 'Which printer type uses heated wax/resin ribbon to transfer image?', options: ['Thermal', 'Inkjet', 'Impact', 'Laser'], answer: 0, explain: 'Thermal printers (dye-sublimation or direct thermal) use heat for image transfer.' },
      { q: 'Most efficient way to feed a PC plus monitor plus dock during a power surge event?', options: ['Power strip', 'Surge protector', 'UPS (Uninterruptible Power Supply)', 'Direct outlet'], answer: 2, explain: 'UPS conditions power + provides battery runtime to allow safe shutdown.' },
      { q: 'A laser printer prints with vertical lines down the page. Likely fix?', options: ['Replace fuser', 'Clean the drum/imaging unit; check toner low', 'Replace power supply', 'Switch to inkjet'], answer: 1, explain: 'Vertical lines often come from a scratched or contaminated drum.' },
      { q: 'Mobile device synchronization for contacts/calendar can use which protocol with Microsoft 365?', options: ['POP3', 'IMAP', 'ActiveSync / Exchange Web Services', 'SNMP'], answer: 2, explain: 'ActiveSync (and EWS / Graph) syncs mail + contacts + calendar from Exchange Online.' },
      { q: 'A SOHO user wants Wi-Fi for guests separate from internal LAN. Best feature?', options: ['DMZ host', 'Guest SSID with VLAN isolation', 'Static IP', 'Disable DHCP'], answer: 1, explain: 'Guest SSID + VLAN isolation prevents guest traffic from reaching internal subnets.' },
      { q: 'Which standard supports up to 100 W of PoE?', options: ['802.3af (PoE)', '802.3at (PoE+)', '802.3bt (PoE++)', '802.3bz'], answer: 2, explain: '802.3bt Type 4 = up to 100 W. 802.3af = 15.4 W, at = 30 W.' },
      { q: 'Power supply efficiency rating 80 PLUS Gold means at least:', options: ['80% efficient at typical load', '85% efficient at typical load', '87-90% efficient across load range', 'Always 100%'], answer: 2, explain: 'Gold ≥ 87% at 20/50/100% load (115V internal numbers similar).' },
      { q: 'A laptop runs hot then shuts off. Which fix is FIRST and cheapest?', options: ['Replace CPU', 'Clean dust from fans/vents, reapply thermal paste if old', 'Replace motherboard', 'Buy new laptop'], answer: 1, explain: 'Dust + dried paste = top cause of thermal shutdown. Always try cleaning + paste before parts.' },
      { q: 'Which is a Type 2 hypervisor feature?', options: ['Runs directly on hardware', 'Requires a host OS to be installed first', 'Used in datacenter primary', 'Required for SDN'], answer: 1, explain: 'Type 2 (VirtualBox, VMware Workstation) runs on a host OS.' },
      { q: 'Which troubleshooting step should follow "implement the solution"?', options: ['Establish theory', 'Verify full system functionality and apply preventive measures', 'Identify the problem', 'Escalate'], answer: 1, explain: 'CompTIA step 5: verify + preventive measures. Step 6: document.' },
      { q: 'Which document should be reviewed BEFORE making a hardware change in an enterprise?', options: ['EULA', 'SDS', 'Change management policy / RFC process', 'Vendor pricing sheet'], answer: 2, explain: 'Enterprise environments require RFC, approval, backout plan, and notification.' },
      { q: 'Which printer technology uses powdered toner fused to paper?', options: ['Inkjet', 'Impact', 'Laser', 'Thermal'], answer: 2, explain: 'Laser printers use toner; fuser melts it onto paper. Impact uses ribbon, inkjet uses liquid ink.' },
      { q: 'A graphics workstation needs ECC RAM. Why?', options: ['Higher clock speed', 'Detect and correct single-bit memory errors — critical for stability in long renders / data work', 'Better gaming FPS', 'Lower price'], answer: 1, explain: 'ECC RAM prevents silent data corruption. Required on servers + many workstations.' },
      { q: 'A user calls saying their laptop fan is loud and they hear clicking sounds. Most likely failing component?', options: ['Speakers', 'HDD (mechanical drive starting to fail) and possibly fan bearing', 'RAM', 'CMOS battery'], answer: 1, explain: 'Clicking = classic HDD imminent failure. Back up immediately + plan replacement. Fan noise = bearing wear.' },
      { q: 'Which fiber connector is a small push-pull duplex commonly used in SFP transceivers?', options: ['ST', 'SC', 'LC', 'MTRJ'], answer: 2, explain: 'LC (Lucent Connector) = smaller, dominant in modern SFP/SFP+ optics.' },
      { q: 'A USB-C cable is rated for Thunderbolt 4. Which is FALSE?', options: ['Supports 40 Gbps data', 'Supports 4K dual displays', 'Supports up to 100 W charging', 'Cannot pass DisplayPort'], answer: 3, explain: 'TB4 carries data, video (DP), and power. Statement that it cannot pass DP is false.' },
      { q: 'Which RAID level requires the MOST disks (minimum)?', options: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'], answer: 3, explain: 'RAID 10 needs 4 minimum (2 mirrored pairs striped). RAID 5 minimum 3. RAID 0/1 minimum 2.' },
      { q: 'Which command shows MAC-to-IP mappings on Windows?', options: ['arp -a', 'ipconfig /all', 'tracert', 'nslookup'], answer: 0, explain: 'arp -a displays the local ARP cache (resolved IP↔MAC entries).' },
      { q: 'A small business wants to ensure each device has the same IP across reboots. Best approach?', options: ['Static IP on each device', 'DHCP reservation tied to MAC address', 'Disable DHCP', 'Manual hosts file'], answer: 1, explain: 'DHCP reservations centralize assignment while giving stable IPs. Static works but creates manual sprawl.' },
      { q: 'Best practice when handling sensitive customer data on a tech\'s laptop?', options: ['Email it to yourself', 'Encrypt the drive (BitLocker/FileVault) and use strong auth', 'Save to desktop', 'Share via personal cloud account'], answer: 1, explain: 'Encryption + access controls protect data at rest in case of theft or loss.' }
    ]
  },

  // ============================================================
  // CompTIA A+ Core 2 (220-1102)
  // ============================================================
  {
    id: 'aplus2',
    name: 'CompTIA A+ Core 2',
    short: 'A+ Core 2',
    code: '220-1102',
    badge: 'CompTIA',
    type: 'comptia',
    desc: 'OS, security, software troubleshooting, operational procedures.',
    lessons: [
      {
        title: '1. Windows Editions & Features',
        body: `
          <h2>Windows 10/11 editions</h2>
          <ul>
            <li><b>Home</b> — consumer; no domain join, no BitLocker mgmt, no Group Policy.</li>
            <li><b>Pro</b> — domain join, BitLocker, RDP host, Group Policy, Hyper-V.</li>
            <li><b>Pro for Workstations</b> — adds high core/RAM, ReFS.</li>
            <li><b>Enterprise</b> — volume licensing, AppLocker, DirectAccess.</li>
            <li><b>Education</b> — Enterprise feature set for schools.</li>
          </ul>
          <h2>Key tools</h2>
          <p><code>regedit</code>, <code>services.msc</code>, <code>devmgmt.msc</code>, <code>diskmgmt.msc</code>, <code>gpedit.msc</code>, <code>eventvwr.msc</code>, <code>msconfig</code>, <code>resmon</code>, <code>perfmon</code>.</p>
        `
      },
      {
        title: '2. Command-Line — Windows',
        body: `
          <pre><code>ipconfig /all          show all NIC info
ipconfig /release      drop DHCP lease
ipconfig /renew        request new lease
ipconfig /flushdns     clear DNS cache
ping host              echo test
tracert host           hop-by-hop route
nslookup host          DNS query
netstat -ano           sockets + PID
sfc /scannow           system file check
chkdsk /f /r           fix + recover bad sectors
gpupdate /force        reapply Group Policy
gpresult /r            show applied policies
shutdown /r /t 0       reboot now
tasklist / taskkill /PID
robocopy src dst /MIR  mirror folders</code></pre>
        `
      },
      {
        title: '3. macOS & Linux Essentials',
        body: `
          <h2>macOS</h2>
          <p>Time Machine = backup. FileVault = full-disk encryption. Disk Utility, Activity Monitor, Spotlight (Cmd+Space), Mission Control, Force Quit (Cmd+Opt+Esc).</p>
          <h2>Linux commands</h2>
          <pre><code>ls -la           list with hidden
cd /path
pwd              working dir
cp src dst
mv src dst       move/rename
rm -rf dir       recursive force delete
chmod 755 file   perms
chown user file
ps aux           processes
top / htop       live processes
grep "x" file
sudo command     elevate
apt / dnf / yum  package managers
systemctl status sshd</code></pre>
        `
      },
      {
        title: '4. Malware Types',
        body: `
          <ul>
            <li><b>Virus</b> — attaches to host file, needs execution.</li>
            <li><b>Worm</b> — self-replicating across network.</li>
            <li><b>Trojan</b> — disguised as legit software.</li>
            <li><b>RAT</b> — Remote Access Trojan; backdoor control.</li>
            <li><b>Rootkit</b> — kernel/firmware-level, hides itself.</li>
            <li><b>Ransomware</b> — encrypts files, demands payment.</li>
            <li><b>Keylogger</b> — records keystrokes.</li>
            <li><b>Spyware / adware</b> — tracks user / pushes ads.</li>
            <li><b>Cryptominer</b> — uses CPU/GPU silently.</li>
            <li><b>Boot sector</b> — infects MBR/UEFI loader.</li>
          </ul>
        `
      },
      {
        title: '5. Social Engineering',
        body: `
          <ul>
            <li><b>Phishing</b> — mass email lure.</li>
            <li><b>Spear phishing</b> — targeted at individual/role.</li>
            <li><b>Whaling</b> — targets executives.</li>
            <li><b>Vishing</b> — voice phone phishing.</li>
            <li><b>Smishing</b> — SMS phishing.</li>
            <li><b>Tailgating / piggybacking</b> — follow through badge door.</li>
            <li><b>Shoulder surfing</b> — observe screen/keyboard.</li>
            <li><b>Pretexting</b> — invented scenario (e.g., fake IT call).</li>
            <li><b>Quid pro quo</b> — offer help in exchange for info.</li>
            <li><b>Dumpster diving</b> — physical info gathering.</li>
            <li><b>Evil twin</b> — rogue Wi-Fi AP impersonates legit SSID.</li>
          </ul>
        `
      },
      {
        title: '6. Windows Security Settings',
        body: `
          <h2>UAC</h2>
          <p>User Account Control — prompts before elevation. Four levels: always notify → never.</p>
          <h2>BitLocker</h2>
          <p>Full-disk encryption; uses TPM 2.0 + optional PIN. BitLocker To Go = removable media.</p>
          <h2>NTFS permissions</h2>
          <p>Standard: Full Control, Modify, Read & Execute, List, Read, Write. <b>Deny overrides Allow.</b> Inherited from parent unless broken.</p>
          <h2>Share vs NTFS</h2>
          <p>When both apply, the <b>most restrictive</b> wins.</p>
          <h2>Defender</h2>
          <p>Windows Defender Antivirus, Firewall, SmartScreen (browser/file rep), Application Guard.</p>
        `
      },
      {
        title: '7. Mobile OS Security',
        body: `
          <ul>
            <li><b>Screen lock</b> — PIN, pattern, password, biometric.</li>
            <li><b>Remote wipe</b> — Find My iPhone / Android Find My Device.</li>
            <li><b>MDM</b> — Mobile Device Management; pushes policies, apps, wipes.</li>
            <li><b>Full device encryption</b> — default on modern iOS/Android.</li>
            <li><b>App store only</b> — sideloading risk; jailbreak/root removes sandbox.</li>
            <li><b>BYOD vs corporate</b> — containerization separates work apps.</li>
          </ul>
        `
      },
      {
        title: '8. Windows Boot & Recovery',
        body: `
          <h2>Boot process</h2>
          <p>UEFI/BIOS → bootloader → kernel → drivers → services → logon.</p>
          <h2>Recovery options</h2>
          <ul>
            <li><b>Safe Mode</b> — minimal drivers/services.</li>
            <li><b>WinRE</b> — Windows Recovery Environment; Startup Repair, Reset, System Restore.</li>
            <li><b>System Restore</b> — registry/system files snapshot.</li>
            <li><b>Reset this PC</b> — keep files or remove all.</li>
            <li><b>bootrec /fixmbr /fixboot /rebuildbcd</b> — fix boot loader.</li>
          </ul>
        `
      },
      {
        title: '9. Backup & Disposal',
        body: `
          <h2>Backup methods</h2>
          <ul>
            <li><b>Full</b> — everything every time; longest, simplest restore.</li>
            <li><b>Incremental</b> — changes since last backup (any kind). Long restore chain.</li>
            <li><b>Differential</b> — changes since last full. Faster restore, larger over time.</li>
            <li><b>Synthetic full</b> — server stitches a full from prior incrementals.</li>
          </ul>
          <h2>3-2-1 rule</h2>
          <p>3 copies, 2 different media, 1 offsite.</p>
          <h2>Drive disposal</h2>
          <ul>
            <li><b>Standard format</b> — does NOT wipe data (recoverable).</li>
            <li><b>Low-level / overwrite</b> — DBAN / vendor utility.</li>
            <li><b>Degaussing</b> — magnetic media only.</li>
            <li><b>Shredding / incineration</b> — physical destruction.</li>
          </ul>
        `
      },
      {
        title: '10. Safety & Documentation',
        body: `
          <h2>ESD protection</h2>
          <p>Anti-static wrist strap, ESD mat, equipotential bonding. Never wear on live AC (high-voltage component risk).</p>
          <h2>MSDS / SDS</h2>
          <p>Safety Data Sheet — handling, hazards, disposal of toner, batteries, chemicals.</p>
          <h2>Change management</h2>
          <ul>
            <li>RFC, scope, risk analysis, sandbox testing.</li>
            <li>End-user acceptance.</li>
            <li>Change board approval, backout plan.</li>
            <li>Document and notify.</li>
          </ul>
          <h2>Privacy & licensing</h2>
          <p>PII, PHI, PCI-DSS, GDPR. EULA, open source, DRM, valid licenses per seat / per device.</p>
        `
      }
    ],
    quiz: [
      { q: 'Which Windows edition is required to join an Active Directory domain?', options: ['Home', 'Pro', 'Single Language', 'S Mode'], answer: 1, explain: 'Pro/Enterprise/Education can join AD. Home cannot.' },
      { q: 'Which command clears the DNS resolver cache on Windows?', options: ['ipconfig /release', 'ipconfig /flushdns', 'netstat -r', 'nslookup /reset'], answer: 1, explain: '`ipconfig /flushdns` clears local cached DNS records.' },
      { q: 'A user clicked a suspicious link; their files are now encrypted with a ransom note. The malware type is:', options: ['Worm', 'Rootkit', 'Ransomware', 'Adware'], answer: 2, explain: 'Encryption + ransom demand = ransomware.' },
      { q: 'A targeted phishing email aimed at the company CFO is called:', options: ['Phishing', 'Spear phishing', 'Whaling', 'Vishing'], answer: 2, explain: 'Whaling = phishing aimed at high-value targets (executives).' },
      { q: 'Which Linux command shows running processes interactively?', options: ['ps', 'top', 'kill', 'grep'], answer: 1, explain: '`top` (or `htop`) is interactive. `ps` is a snapshot.' },
      { q: 'When NTFS and Share permissions conflict, the effective permission is:', options: ['Share wins', 'NTFS wins', 'Most restrictive wins', 'Most permissive wins'], answer: 2, explain: 'Combine across both and take the most restrictive.' },
      { q: 'A 3-2-1 backup strategy means:', options: ['3 backups, 2 media, 1 offsite', '3 days, 2 weeks, 1 month', '3 copies of the data on 1 drive', '3 employees, 2 sites, 1 server'], answer: 0, explain: '3 copies of data, on 2 different media types, with 1 stored offsite.' },
      { q: 'Which is the SAFEST way to permanently destroy data on a failing HDD before disposal?', options: ['Quick format', 'Delete files and empty Recycle Bin', 'Physical shredding', 'Reinstall Windows'], answer: 2, explain: 'Quick format and deletion leave recoverable data. Physical destruction is most reliable.' },
      { q: 'A user calls saying "IT" told them to install software for a security update — but no ticket exists. This is most likely:', options: ['Whaling', 'Pretexting', 'Tailgating', 'Smishing'], answer: 1, explain: 'Pretexting = invented scenario to manipulate the target.' },
      { q: 'Which Windows tool would you use to view application crash details and security audit events?', options: ['Task Manager', 'Event Viewer', 'Resource Monitor', 'Disk Management'], answer: 1, explain: 'Event Viewer (eventvwr.msc) consolidates Application, System, Security logs.' },
      { q: 'In NTFS, if a user is in two groups — one allows Read, one denies Read — the effective permission is:', options: ['Read', 'Modify', 'Denied', 'Full control'], answer: 2, explain: 'Deny always overrides Allow in NTFS.' },
      { q: 'Which command checks system file integrity on Windows?', options: ['chkdsk', 'sfc /scannow', 'dism', 'msconfig'], answer: 1, explain: 'sfc /scannow scans and replaces corrupt protected system files.' },
      { q: 'BitLocker on a desktop PC typically uses which hardware module?', options: ['HSM', 'TPM', 'Smart card', 'Secure Element'], answer: 1, explain: 'TPM 2.0 is the standard BitLocker key store on desktops.' },
      { q: 'Which document covers safe handling of toner or chemicals?', options: ['EULA', 'SDS / MSDS', 'NDA', 'AUP'], answer: 1, explain: 'Safety Data Sheets (SDS, formerly MSDS) describe handling, exposure, and disposal.' },
      { q: 'A worm differs from a virus because:', options: ['Worms encrypt files', 'Worms self-replicate without a host file', 'Worms only target Linux', 'Worms require admin rights'], answer: 1, explain: 'Worms propagate themselves over the network without needing a host file or user action.' },
      { q: 'Which Windows feature isolates browser sessions in a virtualized container?', options: ['SmartScreen', 'Windows Sandbox / Application Guard', 'AppLocker', 'BitLocker'], answer: 1, explain: 'Windows Sandbox (ephemeral) and Microsoft Defender Application Guard (browser) isolate untrusted code in a VM.' },
      { q: 'A laptop user roams to a free public Wi-Fi. BEST way to access work resources securely?', options: ['HTTP only', 'Always-on VPN connecting to corporate network', 'Trust the SSID', 'Disable encryption'], answer: 1, explain: 'Untrusted networks need an encrypted tunnel to a trusted endpoint.' },
      { q: 'Which Linux command shows the routing table?', options: ['ip route', 'ls -route', 'tracert', 'arp -a'], answer: 0, explain: '`ip route` (or legacy `route -n`) prints kernel routing table.' },
      { q: 'A user reports their Windows PC randomly reboots showing "WHEA_UNCORRECTABLE_ERROR". Most likely cause?', options: ['Application bug', 'Hardware error — RAM, CPU, or PSU instability', 'GPU driver', 'Empty Recycle Bin'], answer: 1, explain: 'WHEA = Windows Hardware Error Architecture. Indicates hardware fault — test RAM (MemTest86), check PSU rail voltages.' },
      { q: 'Where would you configure Windows to launch a program automatically at logon for ALL users?', options: ['Current User Run key', 'HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run', 'shell:startup folder of one user only', 'msconfig only'], answer: 1, explain: 'HKLM Run key applies to every user. shell:common startup folder also works.' },
      { q: 'A tech needs to clone a Windows install to a new drive without reinstalling. Best tool?', options: ['robocopy /MIR', 'Disk imaging tool (Macrium, Clonezilla, dd)', 'sfc /scannow', 'gpupdate'], answer: 1, explain: 'Disk imaging captures bootable structure. Robocopy mirrors files but not boot loader.' },
      { q: 'Which encryption mode protects data on a USB flash drive that may be lost?', options: ['NTFS permissions', 'BitLocker To Go', 'Hidden files', 'Compress folder'], answer: 1, explain: 'BitLocker To Go encrypts removable media. NTFS perms do not protect against another OS reading the disk.' },
      { q: 'A SOHO router needs to allow inbound RDP to a specific internal PC. Which feature?', options: ['DMZ host', 'Port forwarding to 3389', 'UPnP only', 'WPA3'], answer: 1, explain: 'Port forwarding maps external port → specific internal IP/port. DMZ host exposes a whole device (risky).' },
      { q: 'Linux: which file lists DNS servers used by the resolver?', options: ['/etc/hosts', '/etc/resolv.conf', '/etc/nsswitch.conf', '/etc/dns'], answer: 1, explain: '/etc/resolv.conf — though many systems now use systemd-resolved or NetworkManager managing this dynamically.' },
      { q: 'A user receives an SMS claiming "Your bank account is locked. Click here." This is:', options: ['Phishing', 'Vishing', 'Smishing', 'Tailgating'], answer: 2, explain: 'Smishing = SMS phishing.' },
      { q: 'Which Windows version supports DirectAccess (always-on corporate VPN without client app)?', options: ['Home', 'Pro', 'Enterprise', 'Any'], answer: 2, explain: 'DirectAccess is an Enterprise feature. Now largely superseded by Always On VPN.' },
      { q: 'Group Policy precedence (last applied wins) order is:', options: ['Local → Site → Domain → OU', 'OU → Domain → Site → Local', 'Domain → OU → Site → Local', 'Random'], answer: 0, explain: 'LSDOU. Closer-to-user OU wins by default. Block Inheritance and Enforced flags can override.' },
      { q: 'A printer has a paper jam that cleared, but still shows offline. Which simple step?', options: ['Reinstall driver', 'Power cycle and clear stuck job in print queue', 'Replace toner', 'Replace fuser'], answer: 1, explain: 'Often a job stuck in queue + print spooler hung. Power cycle printer, clear queue, restart Spooler service.' },
      { q: 'macOS user wants to encrypt their entire system drive. Feature?', options: ['Time Machine', 'FileVault', 'iCloud', 'AirDrop'], answer: 1, explain: 'FileVault provides full-disk encryption on macOS using AES-XTS.' },
      { q: 'Which command in Windows shows active TCP connections with owning process IDs?', options: ['netstat -ano', 'tracert', 'arp -a', 'route print'], answer: 0, explain: '`netstat -ano` lists local/foreign addresses, state, and PID.' },
      { q: 'Defense-in-depth example for endpoint?', options: ['Single antivirus and nothing else', 'AV + EDR + host firewall + patching + user training', 'Disable updates', 'Local admin for all users'], answer: 1, explain: 'Layered controls reduce risk of single failure.' },
      { q: 'CompTIA malware response Step 1 is:', options: ['Quarantine', 'Investigate and verify malware symptoms', 'Reimage', 'Reboot'], answer: 1, explain: '7-step: Investigate → Quarantine → Disable System Restore → Remediate → Schedule updates/scans → Enable System Restore → Educate.' },
      { q: 'A user reports they cannot install software, error says "administrator required". Account type is likely:', options: ['Local admin', 'Standard user', 'Guest', 'Service account'], answer: 1, explain: 'Standard users cannot install software requiring elevation. UAC prompts for admin credentials.' },
      { q: 'Which is BEST for mobile device security in a BYOD scenario?', options: ['Trust users', 'MDM with containerization (separate work profile)', 'Disable Wi-Fi', 'No screen lock'], answer: 1, explain: 'MDM enforces policy + work-container separates corporate data from personal.' },
      { q: 'A user accidentally deleted important files from Documents. They use OneDrive. Recovery?', options: ['Files are gone forever', 'Restore from OneDrive Recycle Bin (recovers up to 93 days typically) or version history', 'Reinstall Windows', 'Run sfc /scannow'], answer: 1, explain: 'OneDrive keeps deleted files in Recycle Bin + version history of edits.' },
      { q: 'Best practice for service accounts running automated jobs?', options: ['Member of Domain Admins for convenience', 'Least privilege, long random password rotated regularly, prevent interactive logon', 'Same password as user accounts', 'Disable logging'], answer: 1, explain: 'Service accounts should have only the permissions needed and never be members of high-privilege groups.' },
      { q: 'Which feature audits and limits which apps can run on a Windows endpoint?', options: ['BitLocker', 'AppLocker / WDAC', 'Defender Firewall only', 'Task Scheduler'], answer: 1, explain: 'AppLocker (Enterprise) and Windows Defender Application Control allow/deny executables, scripts, installers.' },
      { q: 'After a major Windows update, a critical app fails to launch. FIRST step?', options: ['Reinstall Windows', 'Check Reliability Monitor + Event Viewer + vendor knowledge base; roll back update if needed', 'Replace hardware', 'Disable antivirus permanently'], answer: 1, explain: 'Diagnose first. Updates can be uninstalled via Settings → Update history → Uninstall updates.' },
      { q: 'Which built-in macOS shortcut force-quits an app?', options: ['Cmd+Q', 'Cmd+W', 'Cmd+Opt+Esc', 'Cmd+Tab'], answer: 2, explain: 'Cmd+Opt+Esc opens the Force Quit Applications dialog.' },
      { q: 'A laptop in BIOS shows Secure Boot disabled and you need to install Windows 11. Action?', options: ['Install Windows 10 forever', 'Enable UEFI mode + Secure Boot + TPM 2.0', 'Replace CPU', 'Disable RAM'], answer: 1, explain: 'Win11 requires Secure Boot + TPM 2.0 + UEFI as minimum baseline.' },
      { q: 'Which Linux distro family uses dnf as native package manager?', options: ['Debian', 'Ubuntu', 'Fedora / RHEL / CentOS Stream', 'Alpine'], answer: 2, explain: 'dnf is RHEL-family. Debian-family uses apt. Alpine uses apk.' },
      { q: 'Which password policy element protects against credential stuffing?', options: ['Short passwords', 'Reuse across accounts', 'Strong, unique passwords + MFA', 'Write on monitor'], answer: 2, explain: 'Unique passwords prevent leaked-elsewhere credentials from working here. MFA adds factor outside of password.' },
      { q: 'A user reports they receive a "Your computer is infected, call this number" pop-up. What is it?', options: ['Real Windows error', 'Tech support scam / scareware', 'Driver problem', 'Hardware failure'], answer: 1, explain: 'Tech support scam: never call the number, close browser/app, run AV scan, educate user.' },
      { q: 'In Active Directory, which OU practice is preferred?', options: ['Flat structure with all users in default Users container', 'Tiered OU structure that mirrors GPO + delegation needs', 'No OUs at all', 'One OU per user'], answer: 1, explain: 'OUs scope GPOs and permissions. Design around policy + admin delegation.' },
      { q: 'A printer in a shared office prints garbled characters intermittently. Likely cause?', options: ['Wrong/corrupt printer driver or damaged cable', 'Power supply', 'Network too fast', 'Empty toner'], answer: 0, explain: 'Garbled output usually points to driver mismatch or PDL issue (PostScript vs PCL).' },
      { q: 'Which Windows feature creates restore points for system state?', options: ['File History', 'System Restore', 'Backup and Restore', 'BitLocker'], answer: 1, explain: 'System Restore snapshots system files + registry. File History versions user docs.' },
      { q: 'A senior employee wants admin rights "to make my life easier". Best response?', options: ['Grant immediately', 'Document business justification, apply principle of least privilege, route via change/approval', 'Ignore request', 'Give password to entire team'], answer: 1, explain: 'Least privilege is policy. Justify, document, time-box if granted (PAM/JIT preferred).' },
      { q: 'Which key Windows log records account logon successes/failures?', options: ['Application', 'System', 'Security', 'Setup'], answer: 2, explain: 'Security log holds audit events: 4624 logon success, 4625 failed logon, etc.' },
      { q: 'Best long-term remediation after several users fall for phishing?', options: ['Block all email', 'Phishing-resistant MFA (FIDO2), email gateway filtering, mandatory training + simulations', 'Fire users', 'Disable email links'], answer: 1, explain: 'Defense-in-depth: technical + procedural + people controls together.' },
      { q: 'Which screen-lock setting reduces shoulder surfing in a public area?', options: ['Never lock', 'Auto-lock after 1 minute idle + privacy screen filter', 'Big monitor', 'Sticky keys'], answer: 1, explain: 'Short idle lock + physical privacy filter limit visibility.' }
    ]
  },

  // ============================================================
  // CompTIA Network+ (N10-009)
  // ============================================================
  {
    id: 'netplus',
    name: 'CompTIA Network+',
    short: 'Network+',
    code: 'N10-009',
    badge: 'CompTIA',
    type: 'comptia',
    desc: 'Networking concepts, infrastructure, operations, security, troubleshooting.',
    lessons: [
      {
        title: '1. OSI Model',
        body: `
          <h2>The 7 layers</h2>
          <ol>
            <li><b>Physical</b> — cables, signaling, hubs.</li>
            <li><b>Data Link</b> — MAC addresses, frames, switches.</li>
            <li><b>Network</b> — IP addresses, routing, routers.</li>
            <li><b>Transport</b> — TCP/UDP, ports, segments.</li>
            <li><b>Session</b> — set up/tear down.</li>
            <li><b>Presentation</b> — encryption, encoding (TLS).</li>
            <li><b>Application</b> — HTTP, DNS, SMTP.</li>
          </ol>
          <p>Mnemonic top-down: <i>All People Seem To Need Data Processing.</i></p>
          <h2>PDU per layer</h2>
          <p>L1 bits → L2 frames → L3 packets → L4 segments/datagrams.</p>
        `
      },
      {
        title: '2. IPv4 Addressing & Subnetting',
        body: `
          <h2>Address classes (historical)</h2>
          <ul>
            <li><b>A</b> 1–126 /8</li>
            <li><b>B</b> 128–191 /16</li>
            <li><b>C</b> 192–223 /24</li>
          </ul>
          <h2>Private ranges</h2>
          <p>10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. <b>APIPA</b> = 169.254.0.0/16 (DHCP failed).</p>
          <h2>CIDR cheat</h2>
          <table style="font-size:14px;width:100%"><tr><th>CIDR</th><th>Mask</th><th>Hosts</th></tr>
          <tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
          <tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>
          <tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
          <tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>
          <tr><td>/28</td><td>255.255.255.240</td><td>14</td></tr>
          <tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr>
          </table>
          <p>Usable hosts = 2^(32-prefix) - 2.</p>
        `
      },
      {
        title: '3. IPv6 Essentials',
        body: `
          <p>128-bit addresses written in hex, 8 groups of 4. <code>2001:db8::1</code> uses <code>::</code> to compress one run of zeros.</p>
          <h2>Address types</h2>
          <ul>
            <li><b>Global unicast</b> — 2000::/3, public.</li>
            <li><b>Link-local</b> — fe80::/10, auto-configured per interface.</li>
            <li><b>Unique local</b> — fc00::/7, ~ private IPv4.</li>
            <li><b>Multicast</b> — ff00::/8 (no broadcast in v6).</li>
            <li><b>Anycast</b> — closest of many.</li>
          </ul>
          <h2>SLAAC vs DHCPv6</h2>
          <p>SLAAC = stateless, router advertises prefix, host generates address. DHCPv6 = stateful, server tracks leases.</p>
        `
      },
      {
        title: '4. Switching: VLANs, STP, Trunking',
        body: `
          <h2>VLAN</h2>
          <p>Logical L2 segmentation. Tagged on trunk ports (802.1Q). Untagged on access ports. Native VLAN = untagged on trunk.</p>
          <h2>Spanning Tree (STP)</h2>
          <p>Prevents loops. Elects root bridge (lowest ID). Port states: blocking → listening → learning → forwarding. <b>RSTP</b> = rapid (802.1w).</p>
          <h2>Link aggregation</h2>
          <p>LACP (802.3ad) bundles multiple links — higher BW + failover.</p>
          <h2>PoE</h2>
          <p>802.3af = 15.4W. 802.3at (PoE+) = 30W. 802.3bt (PoE++) = 60–100W.</p>
        `
      },
      {
        title: '5. Routing Protocols',
        body: `
          <ul>
            <li><b>Static</b> — manually defined.</li>
            <li><b>RIP / RIPv2</b> — distance vector, hop count, max 15.</li>
            <li><b>OSPF</b> — link-state, areas, cost metric, fast convergence.</li>
            <li><b>EIGRP</b> — Cisco hybrid, composite metric.</li>
            <li><b>BGP</b> — path vector, runs the Internet between ASes.</li>
          </ul>
          <h2>Administrative distance (lower = preferred)</h2>
          <p>Connected 0, Static 1, EIGRP 90, OSPF 110, RIP 120, eBGP 20, iBGP 200.</p>
          <h2>NAT</h2>
          <p>Static, Dynamic, PAT (overload) — many private behind one public.</p>
        `
      },
      {
        title: '6. WAN Technologies',
        body: `
          <ul>
            <li><b>MPLS</b> — label-switched paths, QoS-capable.</li>
            <li><b>SD-WAN</b> — overlay using multiple transports (broadband, LTE, MPLS) with central policy.</li>
            <li><b>Metro Ethernet</b> — carrier Ethernet over fiber.</li>
            <li><b>Leased line / T1 (1.544 Mbps) / T3 (44.7 Mbps)</b>.</li>
            <li><b>SONET/SDH</b> — telecom optical multiplexing.</li>
            <li><b>DOCSIS</b> — cable broadband.</li>
            <li><b>PON (GPON, XGS-PON)</b> — passive optical to home.</li>
          </ul>
        `
      },
      {
        title: '7. Network Security',
        body: `
          <h2>Defense layers</h2>
          <ul>
            <li><b>Firewalls</b> — stateful, NGFW (app-aware, IPS, decrypt).</li>
            <li><b>IDS/IPS</b> — detection vs. prevention inline.</li>
            <li><b>Proxy</b> — forward (clients) / reverse (servers).</li>
            <li><b>VPN</b> — IPsec (tunnel/transport), SSL/TLS, WireGuard.</li>
            <li><b>NAC</b> — 802.1X + RADIUS, posture check before access.</li>
            <li><b>Zero Trust</b> — never trust, always verify; identity + device + context per request.</li>
          </ul>
          <h2>Attack types</h2>
          <p>DDoS, ARP poisoning, DNS poisoning, MAC flooding, on-path (MitM), VLAN hopping, rogue DHCP, evil twin.</p>
        `
      },
      {
        title: '8. Wireless Concepts',
        body: `
          <h2>Bands & channels</h2>
          <p>2.4 GHz: 1, 6, 11 non-overlap. 5 GHz: 20/40/80/160 MHz width tradeoffs. 6 GHz adds Wi-Fi 6E.</p>
          <h2>Authentication</h2>
          <ul>
            <li><b>WPA2/WPA3-Personal (PSK)</b> — shared password.</li>
            <li><b>WPA2/WPA3-Enterprise (802.1X)</b> — per-user via RADIUS, EAP (PEAP, EAP-TLS).</li>
          </ul>
          <h2>Site survey terms</h2>
          <p>RSSI, SNR, channel reuse, heatmap, AP placement, captive portal.</p>
        `
      },
      {
        title: '9. Network Operations & Documentation',
        body: `
          <ul>
            <li><b>SNMP v2c vs v3</b> — v3 adds authentication/encryption.</li>
            <li><b>Syslog</b> — UDP 514; severities 0 (emerg) to 7 (debug).</li>
            <li><b>NetFlow / sFlow</b> — flow records for analytics.</li>
            <li><b>NTP</b> — UDP 123; stratum 0 (atomic) → 15.</li>
            <li><b>Change management</b> — RFC, peer review, maintenance window, rollback.</li>
            <li><b>Documentation</b> — topology diagrams, IP scheme, asset inventory, runbooks, baselines.</li>
          </ul>
        `
      },
      {
        title: '10. Troubleshooting Tools',
        body: `
          <pre><code>ping host
traceroute / tracert host
mtr host                       # combined
arp -a                         # ARP cache
ip a / ifconfig                # interfaces
ip route / route print         # routes
nslookup / dig host
netstat -tunlp                 # listening sockets (Linux)
ss -tunlp                      # modern replacement
tcpdump -i eth0 host x port y  # packet capture
nmap -sS -p- target            # port scan
iperf3 -c server               # bandwidth test</code></pre>
          <h2>Hardware tools</h2>
          <p>Cable tester, tone generator/probe, TDR (copper distance to fault), OTDR (fiber), loopback plug, multimeter, spectrum analyzer, Wi-Fi analyzer.</p>
        `
      }
    ],
    quiz: [
      { q: 'Which OSI layer is responsible for IP addressing and routing?', options: ['Data Link', 'Network', 'Transport', 'Session'], answer: 1, explain: 'Layer 3 (Network) handles logical addressing and routing.' },
      { q: 'Which is a private IPv4 range?', options: ['8.8.8.0/24', '169.254.0.0/16', '172.16.0.0/12', '224.0.0.0/4'], answer: 2, explain: '172.16.0.0/12 is RFC 1918 private. 169.254 is APIPA. 224 is multicast.' },
      { q: 'How many usable host addresses does a /28 provide?', options: ['6', '14', '30', '62'], answer: 1, explain: '2^4 - 2 = 14 usable hosts (subnet and broadcast subtracted).' },
      { q: 'Which IPv6 prefix is link-local?', options: ['2001::/16', 'fc00::/7', 'fe80::/10', 'ff00::/8'], answer: 2, explain: 'fe80::/10 = link-local. ff00::/8 = multicast.' },
      { q: 'Which protocol prevents Layer 2 switching loops?', options: ['VLAN', 'STP', 'OSPF', 'BGP'], answer: 1, explain: 'Spanning Tree (STP / RSTP) blocks redundant L2 paths.' },
      { q: 'A router has routes via OSPF and RIP to the same destination. Which is preferred?', options: ['RIP (lower hop count)', 'OSPF (lower administrative distance)', 'Whichever was learned first', 'Both load-balance'], answer: 1, explain: 'OSPF AD = 110, RIP = 120. Lower AD wins.' },
      { q: 'Which protocol uses UDP port 514?', options: ['SNMP', 'Syslog', 'NTP', 'DNS'], answer: 1, explain: 'Syslog is UDP/514. SNMP is 161/162, NTP 123, DNS 53.' },
      { q: 'Which wireless standard introduced OFDMA?', options: ['802.11n', '802.11ac', '802.11ax (Wi-Fi 6)', '802.11g'], answer: 2, explain: 'Wi-Fi 6 (802.11ax) added OFDMA for better multi-client efficiency.' },
      { q: '802.1X is BEST described as:', options: ['VLAN tagging', 'Port-based network access control', 'Wireless encryption', 'Routing protocol'], answer: 1, explain: '802.1X = port-based NAC; supplicant → authenticator → RADIUS server.' },
      { q: 'A user gets 169.254.x.x address. The MOST likely cause is:', options: ['Static IP conflict', 'DHCP server unreachable', 'IPv6 misconfig', 'DNS failure'], answer: 1, explain: 'APIPA assigns 169.254 when DHCP fails to respond.' },
      { q: 'Which command captures packets on Linux?', options: ['tcpdump', 'netstat', 'route', 'arp'], answer: 0, explain: 'tcpdump is the standard CLI packet capture tool on *nix.' },
      { q: 'Which NAT type allows many internal hosts to share ONE public IP?', options: ['Static NAT', 'Dynamic NAT', 'PAT', 'NAT64'], answer: 2, explain: 'PAT (overload) multiplexes using source ports.' },
      { q: 'A trunk port carries which kind of traffic?', options: ['One VLAN only', 'Multiple VLANs (tagged)', 'No VLAN traffic', 'Only management VLAN'], answer: 1, explain: 'Trunks carry tagged frames for multiple VLANs (802.1Q).' },
      { q: 'Which protocol runs between autonomous systems on the Internet?', options: ['OSPF', 'RIP', 'EIGRP', 'BGP'], answer: 3, explain: 'BGP is the inter-AS path-vector routing protocol of the Internet.' },
      { q: 'Which tool BEST locates the distance to a break in a copper cable?', options: ['Tone generator', 'Multimeter', 'TDR', 'Loopback plug'], answer: 2, explain: 'Time-Domain Reflectometer (TDR) measures distance to copper fault. OTDR for fiber.' },
      { q: 'A /23 network contains how many usable hosts?', options: ['254', '510', '1022', '2046'], answer: 1, explain: '2^(32-23) = 512, minus 2 = 510 usable.' },
      { q: 'Which subnet mask matches a /22?', options: ['255.255.252.0', '255.255.254.0', '255.255.255.0', '255.255.248.0'], answer: 0, explain: '/22 = 22 network bits = 255.255.252.0. /23 = .254, /24 = .255.0.' },
      { q: 'A switch port is configured for access VLAN 10. A PC plugs in. Frames leaving the PC are:', options: ['Tagged with VLAN 10', 'Untagged; switch assigns to VLAN 10 internally', 'Dropped', 'Sent to all VLANs'], answer: 1, explain: 'Access ports receive untagged frames and place them in the access VLAN.' },
      { q: 'Which feature prevents accidentally plugging a switch into an edge port?', options: ['PortFast', 'BPDU Guard', 'UDLD', 'STP root guard'], answer: 1, explain: 'BPDU Guard disables port that receives a BPDU on an edge port — protects from rogue switch.' },
      { q: 'Which protocol is required to run trunking between Cisco switches with 802.1Q tagging?', options: ['ISL only', 'dot1q encapsulation', 'CDP', 'PAgP'], answer: 1, explain: '802.1Q (dot1q) is the industry-standard VLAN tagging encapsulation.' },
      { q: 'A network has 6 switches in a partial mesh. Without STP, what happens during a broadcast?', options: ['Nothing', 'Broadcast storm — frames loop endlessly, CPU + bandwidth saturated', 'Faster networking', 'Switch reboots'], answer: 1, explain: 'L2 has no TTL. STP blocks redundant paths to prevent storms.' },
      { q: 'Default Cisco STP timer for forwarding delay (per state)?', options: ['5 s', '10 s', '15 s', '30 s'], answer: 2, explain: 'Classic STP: 15 s listening + 15 s learning before forwarding. RSTP converges much faster.' },
      { q: 'Which routing metric does OSPF use?', options: ['Hop count', 'Bandwidth-derived cost', 'Composite (bandwidth, delay, reliability)', 'AS path'], answer: 1, explain: 'OSPF cost = ref-bandwidth / interface-bandwidth.' },
      { q: 'EIGRP composite metric components include:', options: ['Hop count only', 'Bandwidth, delay, reliability, load, MTU', 'AS path', 'Cost only'], answer: 1, explain: 'EIGRP uses K-values; default uses bandwidth + delay.' },
      { q: 'BGP attribute used to select preferred outbound path within an AS?', options: ['MED', 'Local Preference', 'AS Path', 'Weight (Cisco proprietary)'], answer: 1, explain: 'Local Pref is the second decision criterion (after Weight on Cisco). Higher = better outbound.' },
      { q: 'NAT translation tracked at: source port, destination port, source IP, destination IP. This is:', options: ['Static NAT', 'Dynamic NAT', 'PAT (NAPT)', 'NAT64'], answer: 2, explain: 'PAT multiplexes many internal sessions over one public IP using source ports.' },
      { q: 'IPv6 address 2001:db8::1/64 — what is the network portion?', options: ['2001:db8::/16', '2001:db8::/32', '2001:db8::/64', '2001:db8::/128'], answer: 2, explain: 'Prefix length /64 = first 64 bits = 2001:0db8:0000:0000.' },
      { q: 'Which IPv6 transition mechanism encapsulates IPv6 inside IPv4 packets?', options: ['Dual stack', '6to4 / 6in4 tunneling', 'NAT', 'ARP'], answer: 1, explain: '6in4 and 6to4 tunnel IPv6 packets inside IPv4 to traverse v4-only networks.' },
      { q: 'A user on 192.168.1.50 cannot reach 10.10.10.5. Both subnets exist. Likely issue?', options: ['DHCP exhausted', 'No L3 route between subnets, or ACL blocking', 'DNS down', 'Wi-Fi off'], answer: 1, explain: 'Different subnets need a router with a route + permissive ACL/firewall between them.' },
      { q: 'Which firewall type tracks connection state and allows return traffic for established flows?', options: ['Packet filter (stateless)', 'Stateful firewall', 'NAT only', 'Proxy only'], answer: 1, explain: 'Stateful firewalls inspect TCP state and dynamically permit return traffic.' },
      { q: 'Difference between IDS and IPS?', options: ['IDS prevents, IPS detects', 'IDS detects/alerts; IPS sits inline and can block', 'Both block by default', 'IDS is hardware only'], answer: 1, explain: 'IDS is passive; IPS is inline and can drop matching traffic.' },
      { q: 'A SOC sees thousands of TCP SYNs from many sources to the same server, no ACK. Attack?', options: ['Port scan', 'SYN flood (DoS)', 'ARP poisoning', 'DNS cache poisoning'], answer: 1, explain: 'Half-open SYNs exhaust the server\'s connection table. Mitigation: SYN cookies + scrubbing.' },
      { q: 'Wireless deauthentication frames are part of which attack?', options: ['Evil twin handshake capture / forced reconnect', 'WPS pin brute', 'Bluejacking', 'Wardriving'], answer: 0, explain: '802.11 management frames are unprotected unless 802.11w (PMF) enabled. Deauth → forces clients off → reconnect captures handshake.' },
      { q: 'Best Wi-Fi management feature to mitigate deauth attacks?', options: ['Disable Wi-Fi', '802.11w (Protected Management Frames)', 'Static channel', 'WPA1'], answer: 1, explain: 'PMF (802.11w) authenticates management frames — required for WPA3.' },
      { q: 'A site survey shows poor signal in a corner office. Best fix without rewiring?', options: ['Add an additional AP placed for coverage in that area', 'Raise transmit power on existing AP to max', 'Use larger antenna only', 'Disable 5 GHz'], answer: 0, explain: 'Additional AP is best practice. Cranking power adds noise + creates sticky clients.' },
      { q: 'Which DHCP option provides the DNS server list to clients?', options: ['Option 3', 'Option 6', 'Option 15', 'Option 66'], answer: 1, explain: 'Option 6 = DNS server. Option 3 = router (gateway). Option 15 = domain name. Option 66 = TFTP boot server.' },
      { q: 'A VoIP phone needs voice on VLAN 20, but the workstation behind it on VLAN 10. Best port config?', options: ['Trunk all VLANs', 'Access VLAN 10 + voice VLAN 20 (auxiliary VLAN)', 'Single VLAN for both', 'Routed port'], answer: 1, explain: 'Cisco voice VLAN feature: switchport access vlan 10 + switchport voice vlan 20.' },
      { q: 'Network performance monitoring metric for jitter measures:', options: ['Average latency', 'Variation in inter-packet delay', 'Packet loss percent', 'Bandwidth used'], answer: 1, explain: 'Jitter = variance in delay. Critical for real-time audio/video. Often < 30 ms target for VoIP.' },
      { q: 'A 10G fiber link suddenly drops. Best first physical-layer check?', options: ['Reboot core router', 'Verify SFP type matches the cable / link (SR vs LR), check optical levels with light meter', 'Swap motherboard', 'Reinstall OS'], answer: 1, explain: 'Mismatched SFP optics (SR=multimode short reach, LR=single-mode long reach) is a common cause.' },
      { q: 'Which protocol is used for time synchronization with stratum hierarchy?', options: ['SNMP', 'NTP', 'Syslog', 'DNS'], answer: 1, explain: 'NTP. Stratum 0 = reference clock, Stratum 1 = directly attached, down to 15.' },
      { q: 'Out-of-band management refers to:', options: ['Remote desktop over Internet', 'Dedicated management network/interface (e.g., console port, iLO/iDRAC, mgmt VLAN) separate from production traffic', 'SNMP traps only', 'API gateway'], answer: 1, explain: 'OOB = separate path so admins can recover even when production network is down.' },
      { q: 'Which document captures the agreed performance/uptime between provider and customer?', options: ['MOU', 'NDA', 'SLA', 'SOW'], answer: 2, explain: 'Service Level Agreement specifies uptime %, response times, penalties.' },
      { q: 'Cable types from least to most secure against EMI eavesdropping?', options: ['Coax → UTP → STP → Fiber', 'UTP → STP → Coax → Fiber', 'Fiber → STP → UTP', 'All equal'], answer: 1, explain: 'Fiber is hardest to tap (no electrical emission). STP/coax shielded better than UTP.' },
      { q: 'Which Internet connection type typically offers symmetric speeds in residential markets?', options: ['DSL', 'Cable (DOCSIS)', 'Fiber (FTTH)', 'Satellite'], answer: 2, explain: 'Fiber typically symmetric (gigabit up + down). DSL/cable usually asymmetric.' },
      { q: 'A small office wants centralized auth for Wi-Fi + VPN + switch admin. Service?', options: ['RADIUS server (FreeRADIUS or NPS)', 'DHCP server', 'DNS server', 'Syslog'], answer: 0, explain: 'RADIUS centralizes AAA. Often joined to AD/LDAP for identity source.' },
      { q: 'Which command on a Cisco IOS device displays MAC address table?', options: ['show vlan', 'show mac address-table', 'show ip route', 'show arp'], answer: 1, explain: '`show mac address-table` lists learned MACs per port and VLAN.' },
      { q: 'A switch sees a frame with destination MAC not in its table. It will:', options: ['Drop it', 'Flood out all ports in the same VLAN except source', 'Forward to default gateway', 'Send ARP'], answer: 1, explain: 'Unknown unicast = flood within the VLAN.' },
      { q: 'Network diagram showing logical L3 boundaries (subnets, routers, firewalls) is called:', options: ['Physical diagram', 'Logical diagram', 'Wiring diagram', 'Floor plan'], answer: 1, explain: 'Logical = how traffic flows / how networks segment. Physical = where cables run.' },
      { q: 'Which is a benefit of SDN (Software-Defined Networking)?', options: ['Eliminates routers entirely', 'Centralized control plane allows programmable, policy-driven networking', 'Replaces TCP/IP', 'Removes the need for security'], answer: 1, explain: 'SDN separates data plane from control plane; controller (e.g., Cisco APIC, OpenFlow ctrl) pushes policy.' },
      { q: 'Zero Trust Network Access (ZTNA) replaces:', options: ['Antivirus', 'Traditional VPN with broad LAN access — replaces it with per-app brokered access', 'DNS', 'DHCP'], answer: 1, explain: 'ZTNA grants per-application access after verifying user + device every request. No flat "inside the perimeter".' },
      { q: 'Which monitoring approach pulls device statistics with a polling protocol over UDP 161?', options: ['Syslog', 'NetFlow', 'SNMP', 'NTP'], answer: 2, explain: 'SNMP polls OIDs / can receive traps on UDP 162.' },
      { q: 'A user complains video calls glitch when others on WAN are uploading large files. Best fix?', options: ['Larger Internet plan only', 'QoS prioritizing real-time/voice traffic (DSCP / 802.1p)', 'Disable HTTPS', 'Reboot daily'], answer: 1, explain: 'QoS marks + queues real-time traffic ahead of bulk transfers. Pair with sufficient WAN capacity.' },
      { q: 'A captive portal is commonly used for:', options: ['MAC spoofing', 'Guest Wi-Fi access acceptance + auth before granting Internet', 'Routing protocol auth', 'DNS resolution'], answer: 1, explain: 'Hotel/conference Wi-Fi: redirect first HTTP request to portal page until accepted.' }
    ]
  },

  // ============================================================
  // CompTIA Security+ (SY0-701)
  // ============================================================
  {
    id: 'secplus',
    name: 'CompTIA Security+',
    short: 'Security+',
    code: 'SY0-701',
    badge: 'CompTIA',
    type: 'comptia',
    desc: 'Threats, attacks, architecture, identity, governance, risk.',
    lessons: [
      {
        title: '1. CIA Triad & Core Concepts',
        body: `
          <h2>CIA</h2>
          <ul>
            <li><b>Confidentiality</b> — only authorized see data. Tools: encryption, access controls.</li>
            <li><b>Integrity</b> — data not altered. Tools: hashes, digital signatures.</li>
            <li><b>Availability</b> — accessible when needed. Tools: redundancy, DDoS protection, backups.</li>
          </ul>
          <h2>AAA</h2>
          <p><b>Authentication</b> (prove who), <b>Authorization</b> (what allowed), <b>Accounting</b> (logged).</p>
          <h2>Non-repudiation</h2>
          <p>Can't deny action. Digital signatures + audit logs.</p>
          <h2>Defense in depth</h2>
          <p>Layered controls — preventive, detective, corrective; technical, administrative, physical.</p>
        `
      },
      {
        title: '2. Threat Actors & Motivation',
        body: `
          <ul>
            <li><b>Nation-state / APT</b> — well-funded, persistent, espionage / disruption.</li>
            <li><b>Organized crime</b> — financial gain (ransomware, fraud).</li>
            <li><b>Hacktivist</b> — ideology.</li>
            <li><b>Insider</b> — current/former staff; access misuse.</li>
            <li><b>Script kiddie</b> — low-skill, available tools.</li>
            <li><b>Unskilled / shadow IT user</b> — accidental risk.</li>
          </ul>
          <h2>Attack vectors</h2>
          <p>Email, web, removable media, supply chain, cloud misconfig, wireless, social engineering, physical.</p>
        `
      },
      {
        title: '3. Attack Types',
        body: `
          <h2>Network</h2>
          <p>DDoS, on-path (MitM), DNS poisoning, ARP spoofing, replay, downgrade attack.</p>
          <h2>Application</h2>
          <ul>
            <li><b>Injection</b> — SQLi, command injection.</li>
            <li><b>XSS</b> — stored, reflected, DOM-based.</li>
            <li><b>CSRF</b> — forged request from authenticated session.</li>
            <li><b>SSRF</b> — server fetches attacker-supplied URL.</li>
            <li><b>Buffer overflow</b> — overruns memory bounds.</li>
            <li><b>Race condition / TOCTOU</b>.</li>
          </ul>
          <h2>Password</h2>
          <p>Brute force, dictionary, password spraying (one pw, many users), credential stuffing (leaked db reuse), rainbow table.</p>
          <h2>Cryptographic</h2>
          <p>Birthday, collision, downgrade, side-channel, length-extension.</p>
        `
      },
      {
        title: '4. Cryptography Essentials',
        body: `
          <h2>Symmetric (same key)</h2>
          <p>AES (current standard, 128/192/256-bit), ChaCha20, 3DES (legacy), DES (broken).</p>
          <h2>Asymmetric (key pair)</h2>
          <p>RSA, ECC (smaller keys, same strength), Diffie-Hellman / ECDHE (key exchange).</p>
          <h2>Hashing</h2>
          <p>SHA-256, SHA-3, BLAKE2. <b>MD5 & SHA-1 are broken</b> for security. Salt + slow KDF (bcrypt, scrypt, Argon2, PBKDF2) for passwords.</p>
          <h2>Digital signatures</h2>
          <p>Sign with private, verify with public. Provides integrity + authentication + non-repudiation.</p>
          <h2>PKI</h2>
          <p>CA issues certs, RA verifies identity, CRL & OCSP revocation. X.509 cert holds public key + identity + CA signature.</p>
        `
      },
      {
        title: '5. Identity & Access Management',
        body: `
          <h2>Factors</h2>
          <ul>
            <li><b>Something you know</b> — password, PIN.</li>
            <li><b>Something you have</b> — token, smart card, phone.</li>
            <li><b>Something you are</b> — biometric.</li>
            <li><b>Somewhere you are</b> — geolocation/IP.</li>
            <li><b>Something you do</b> — behavioral (typing).</li>
          </ul>
          <p><b>MFA</b> requires 2+ different factor categories.</p>
          <h2>Access models</h2>
          <ul>
            <li><b>DAC</b> — owner sets perms.</li>
            <li><b>MAC</b> — labels / clearances (military).</li>
            <li><b>RBAC</b> — by job role.</li>
            <li><b>ABAC</b> — attributes & policy (NIST).</li>
          </ul>
          <h2>Federation & SSO</h2>
          <p>SAML, OAuth 2.0, OIDC. Federation = identity from one realm trusted in another.</p>
        `
      },
      {
        title: '6. Network Security Controls',
        body: `
          <ul>
            <li><b>Segmentation</b> — VLANs, microsegmentation, DMZ / screened subnet.</li>
            <li><b>Firewalls</b> — stateful, NGFW with IPS + app awareness + TLS inspect.</li>
            <li><b>Proxy</b> — egress filter, content rules.</li>
            <li><b>NAC</b> — 802.1X posture.</li>
            <li><b>VPN</b> — site-to-site (IPsec), client (SSL/IKEv2/WireGuard).</li>
            <li><b>SASE / SSE</b> — cloud-delivered SWG + ZTNA + CASB + FWaaS.</li>
            <li><b>DNS filtering</b> — block by reputation.</li>
            <li><b>WAF</b> — protects web apps; OWASP rules.</li>
          </ul>
        `
      },
      {
        title: '7. Risk Management',
        body: `
          <h2>Risk = Threat × Vulnerability × Impact</h2>
          <h2>Responses</h2>
          <ul>
            <li><b>Accept</b> — within tolerance.</li>
            <li><b>Avoid</b> — eliminate activity.</li>
            <li><b>Transfer</b> — insurance, contract.</li>
            <li><b>Mitigate</b> — apply controls.</li>
          </ul>
          <h2>Metrics</h2>
          <ul>
            <li><b>SLE</b> = Asset Value × Exposure Factor.</li>
            <li><b>ARO</b> = annual rate of occurrence.</li>
            <li><b>ALE</b> = SLE × ARO.</li>
            <li><b>RTO</b> = max acceptable downtime.</li>
            <li><b>RPO</b> = max acceptable data loss.</li>
            <li><b>MTBF</b>, <b>MTTR</b>.</li>
          </ul>
        `
      },
      {
        title: '8. Governance, Compliance, Privacy',
        body: `
          <h2>Frameworks</h2>
          <p>NIST CSF, NIST 800-53, ISO 27001/27002, CIS Controls, COBIT.</p>
          <h2>Regs by data type</h2>
          <ul>
            <li><b>HIPAA</b> — health info (PHI).</li>
            <li><b>PCI-DSS</b> — payment card.</li>
            <li><b>GDPR</b> — EU personal data; data subject rights.</li>
            <li><b>SOX</b> — financial reporting integrity.</li>
            <li><b>CCPA / CPRA</b> — California consumers.</li>
          </ul>
          <h2>Policies</h2>
          <p>AUP, BYOD, data classification, retention, separation of duties, least privilege, job rotation, mandatory vacation.</p>
        `
      },
      {
        title: '9. Incident Response & Forensics',
        body: `
          <h2>IR phases (NIST 800-61)</h2>
          <ol>
            <li><b>Preparation</b> — policies, IR team, tools, training.</li>
            <li><b>Detection &amp; Analysis</b>.</li>
            <li><b>Containment, Eradication, Recovery</b>.</li>
            <li><b>Post-incident</b> — lessons learned.</li>
          </ol>
          <h2>Evidence handling</h2>
          <ul>
            <li><b>Chain of custody</b> — every transfer logged.</li>
            <li><b>Order of volatility</b> — RAM → swap → disk → backups.</li>
            <li><b>Hashing</b> — prove image integrity.</li>
            <li><b>Write blockers</b> — prevent modification during imaging.</li>
          </ul>
          <h2>Frameworks</h2>
          <p>MITRE ATT&CK (TTPs), Cyber Kill Chain (7 stages), Diamond Model.</p>
        `
      },
      {
        title: '10. Secure Architecture & Cloud',
        body: `
          <h2>Shared responsibility</h2>
          <p>Cloud provider secures <i>of</i> the cloud (hardware, hypervisor). Customer secures <i>in</i> the cloud (data, IAM, OS patching for IaaS).</p>
          <h2>Cloud controls</h2>
          <ul>
            <li><b>CASB</b> — visibility/policy for SaaS.</li>
            <li><b>CSPM</b> — config posture (misconfigs).</li>
            <li><b>CWPP</b> — workload protection.</li>
            <li><b>IAM least privilege</b>, MFA, conditional access.</li>
            <li><b>Encryption at rest + in transit</b>; customer-managed keys (CMK / BYOK).</li>
          </ul>
          <h2>Resilience</h2>
          <p>RAID, clustering, load balancing, geo-redundancy, hot/warm/cold sites, snapshots, immutable backups against ransomware.</p>
        `
      }
    ],
    quiz: [
      { q: 'Which control type is a security awareness training program?', options: ['Technical', 'Physical', 'Administrative', 'Detective'], answer: 2, explain: 'Policies, procedures, and training are administrative controls.' },
      { q: 'A hashing algorithm provides which property of the CIA triad?', options: ['Confidentiality', 'Integrity', 'Availability', 'Authorization'], answer: 1, explain: 'Hashes detect tampering → integrity.' },
      { q: 'Which algorithm is symmetric?', options: ['RSA', 'ECC', 'AES', 'Diffie-Hellman'], answer: 2, explain: 'AES uses one shared key. RSA/ECC/DH are asymmetric.' },
      { q: 'An attacker tries the single password "Spring2026!" against thousands of accounts. This is:', options: ['Brute force', 'Credential stuffing', 'Password spraying', 'Rainbow table'], answer: 2, explain: 'One password against many users to avoid account lockout = password spraying.' },
      { q: 'Which is the BEST defense against pass-the-hash attacks?', options: ['Disabling SMBv1', 'Using NTLM v2 only', 'Credential Guard / disabling NTLM where possible', 'Longer passwords'], answer: 2, explain: 'Hashes are credential equivalents — Credential Guard isolates them; preferring Kerberos and removing NTLM removes the attack surface.' },
      { q: 'Order of volatility (most → least) is:', options: ['Disk, RAM, network, registers', 'RAM, swap, disk, backups', 'Backups, disk, RAM, registers', 'Network, swap, RAM, disk'], answer: 1, explain: 'Capture most volatile first — registers/cache → RAM → swap → disk → backups.' },
      { q: 'A SAML assertion is used in:', options: ['Network packet inspection', 'Federated SSO', 'Symmetric encryption', 'DNS resolution'], answer: 1, explain: 'SAML carries identity assertions between IdP and SP — federated SSO.' },
      { q: 'GDPR primarily protects:', options: ['Payment cards', 'EU personal data', 'US health information', 'Financial reports'], answer: 1, explain: 'GDPR = EU personal data rights. PCI = cards. HIPAA = US PHI.' },
      { q: 'Which is the FIRST step of NIST IR?', options: ['Containment', 'Detection', 'Preparation', 'Lessons learned'], answer: 2, explain: 'Preparation precedes any incident — policies, tooling, training.' },
      { q: 'ALE = ?', options: ['SLE × ARO', 'SLE + ARO', 'EF × ARO', 'AV × SLE'], answer: 0, explain: 'Annualized Loss Expectancy = SLE × ARO.' },
      { q: 'Which is NOT a valid MFA combination?', options: ['Password + smart card', 'Password + PIN', 'Fingerprint + token', 'Password + SMS code'], answer: 1, explain: 'Two "something you know" = same factor category, not MFA.' },
      { q: 'A WAF primarily protects against:', options: ['DDoS volumetric floods', 'Web app attacks (SQLi, XSS)', 'Phishing emails', 'Lost device data'], answer: 1, explain: 'Web Application Firewall filters HTTP traffic for OWASP-class attacks.' },
      { q: 'Customer-managed keys (CMK) in cloud are used for:', options: ['Identity federation', 'Encryption where the customer controls key lifecycle', 'Backup retention policies', 'DDoS mitigation'], answer: 1, explain: 'CMK / BYOK = customer keeps key control, often via KMS / HSM.' },
      { q: 'SSRF allows an attacker to:', options: ['Inject SQL into a database', 'Make the server request attacker-chosen URLs', 'Run JavaScript in the victim browser', 'Crack hashed passwords'], answer: 1, explain: 'Server-Side Request Forgery abuses server-side fetch logic.' },
      { q: 'In the shared responsibility model for IaaS, the CUSTOMER is responsible for:', options: ['Hypervisor patching', 'Physical security of datacenter', 'Guest OS patches and IAM', 'Hardware replacement'], answer: 2, explain: 'IaaS customer manages guest OS and above, IAM, data; provider handles hypervisor and below.' },
      { q: 'AES-256-GCM provides which security properties?', options: ['Confidentiality only', 'Confidentiality + integrity + authenticated encryption', 'Integrity only', 'Compression'], answer: 1, explain: 'GCM is AEAD: AES encrypts, GHASH authenticates. Single primitive for C+I+authenticity.' },
      { q: 'A user installed a USB key that secretly captures keystrokes. Threat type?', options: ['Keylogger (hardware)', 'Phishing', 'Worm', 'Logic bomb'], answer: 0, explain: 'Hardware keylogger sits inline between keyboard and PC. Physical-security control gap.' },
      { q: 'Best mitigation for typosquatting domain attacks?', options: ['DNS filtering + user training + browser safe-browse + register similar domains', 'Disable HTTPS', 'Block all email', 'Use HTTP'], answer: 0, explain: 'Layered defense — block known bad domains, train users on URL inspection, defensively register lookalikes.' },
      { q: 'A penetration tester finds a Windows service running as SYSTEM with weak file permissions on its EXE. Attack?', options: ['Buffer overflow', 'Unquoted service path / DLL hijack / binary replacement = privilege escalation', 'CSRF', 'SQL injection'], answer: 1, explain: 'If a low-priv user can replace the EXE, the service runs attacker code as SYSTEM on next start.' },
      { q: 'A pen test contract specifies rules of engagement. Which element is MOST critical?', options: ['Color of badges', 'Authorized scope, timing, allowed techniques, point of contact, emergency procedures', 'Coffee brand', 'Marketing slogan'], answer: 1, explain: 'RoE prevents legal exposure + production incidents.' },
      { q: 'Difference between black-box, gray-box, and white-box testing?', options: ['Box color only', 'Tester knowledge level — none / partial / full insider info', 'Time of day', 'Cost only'], answer: 1, explain: 'Black = no knowledge, white = full source/architecture, gray = limited info.' },
      { q: 'Which control type is a security guard?', options: ['Technical', 'Physical', 'Administrative', 'Compensating'], answer: 1, explain: 'Physical control. Cameras, locks, mantraps, guards.' },
      { q: 'Mantrap (access control vestibule) primarily prevents:', options: ['DDoS', 'Tailgating / piggybacking', 'Phishing', 'Malware'], answer: 1, explain: 'Two-door interlocked room allows only one person at a time.' },
      { q: 'Which is a deterrent control?', options: ['Patch management', 'Visible security camera + "premises monitored" signage', 'Encryption', 'DLP'], answer: 1, explain: 'Deterrent discourages attempt. Visible cameras and warning signs.' },
      { q: 'DLP (Data Loss Prevention) primarily monitors:', options: ['DDoS', 'Movement of sensitive data (PII, IP, PHI) across endpoints, email, web, cloud', 'Disk performance', 'CPU temperature'], answer: 1, explain: 'DLP classifies and watches data; blocks/alerts on exfil attempts.' },
      { q: 'Which artifact records cryptographic identity for a TLS server?', options: ['Hash', 'X.509 digital certificate', 'Salt', 'Nonce'], answer: 1, explain: 'X.509 cert binds public key to identity, signed by CA.' },
      { q: 'OCSP stapling solves what problem?', options: ['Cert signing speed', 'Revocation check latency + privacy — server staples a fresh OCSP response with the cert', 'Cert rotation', 'Encryption strength'], answer: 1, explain: 'Without stapling, client contacts OCSP responder for each cert. Stapling eliminates that round-trip.' },
      { q: 'TLS 1.3 improvements over TLS 1.2 include:', options: ['No improvements', 'Faster 1-RTT handshake, removed weak ciphers, mandatory forward secrecy', 'Removed cipher requirements', 'No certificates'], answer: 1, explain: 'TLS 1.3: 1-RTT (or 0-RTT for resumption), removes RC4/CBC, requires PFS via ECDHE.' },
      { q: 'Which token type carries claims signed by issuer for federation?', options: ['OAuth refresh token', 'JWT / SAML assertion', 'Kerberos TGT', 'API key'], answer: 1, explain: 'JWT (JSON Web Token) and SAML assertions are signed identity assertions used in SSO / OIDC.' },
      { q: 'OAuth 2.0 vs OpenID Connect?', options: ['Same thing', 'OAuth = authorization; OIDC adds an authentication identity layer (ID token) on top', 'OIDC is older', 'OAuth handles identity'], answer: 1, explain: 'OAuth grants resource access. OIDC adds standardized identity (id_token JWT).' },
      { q: 'A web app accepts file uploads. Best protection against malicious uploads?', options: ['Trust file extension', 'Validate MIME, magic bytes, AV scan, store outside webroot, randomize names, restrict execution', 'Allow .exe only', 'No validation'], answer: 1, explain: 'Defense-in-depth. Never serve user uploads from a path that can execute.' },
      { q: 'Which attack injects malicious JavaScript stored on a server that later runs in victim browsers?', options: ['Reflected XSS', 'Stored / persistent XSS', 'CSRF', 'SSRF'], answer: 1, explain: 'Stored XSS = payload saved (e.g., in DB) then served back to viewers.' },
      { q: 'CSP (Content Security Policy) header purpose?', options: ['DNS-level block', 'Browser-enforced allowlist of script/style/image sources to mitigate XSS', 'CPU isolation', 'Storage encryption'], answer: 1, explain: 'CSP restricts where scripts can load from; reports violations.' },
      { q: 'A WAF rule fires only after analyzing the full request including body. Which inspection mode?', options: ['Layer 3 stateless', 'Layer 7 application-aware', 'Layer 2 only', 'Physical'], answer: 1, explain: 'WAF operates at L7, parses HTTP semantics.' },
      { q: 'SIEM correlation rule: 10+ failed logins followed by a success from same IP in 2 minutes. Detects?', options: ['Routine logon', 'Brute force success', 'DNS amplification', 'Phishing only'], answer: 1, explain: 'Pattern indicates credential compromise after brute force.' },
      { q: 'SOAR platforms primarily add:', options: ['Just storage', 'Orchestration + automated playbook response to alerts (containment, enrichment, ticketing)', 'Endpoint AV', 'Patching'], answer: 1, explain: 'SOAR drives consistent automated workflows from SIEM alerts.' },
      { q: 'EDR vs traditional AV?', options: ['EDR is older', 'EDR adds behavior detection, telemetry, threat hunting, remote response — beyond signature AV', 'Same thing', 'AV is faster always'], answer: 1, explain: 'Endpoint Detection & Response gives investigators visibility and remote response.' },
      { q: 'Which framework breaks adversary behavior into tactics, techniques, sub-techniques?', options: ['STRIDE', 'OWASP Top 10', 'MITRE ATT&CK', 'NIST SP 800-53'], answer: 2, explain: 'MITRE ATT&CK matrix maps adversary TTPs to enterprise/cloud/mobile environments.' },
      { q: 'A red team tests defenses; the blue team defends. Together they:', options: ['Compete', 'Are called a Purple team — share findings to improve detections and controls', 'Are management', 'Are sales'], answer: 1, explain: 'Purple teaming = collaborative red+blue exercise.' },
      { q: 'NIST 800-61 Containment goal is to:', options: ['Punish the attacker', 'Limit damage and prevent further compromise while preserving evidence', 'Send press releases', 'Skip eradication'], answer: 1, explain: 'Containment isolates the affected systems and stops spread while RAM/disk evidence is captured.' },
      { q: 'Tabletop exercise differs from a full DR test in that:', options: ['Same thing', 'Discussion-based, no actual systems failed over — cheaper, faster, but less validation', 'Tabletop is automated', 'Full DR uses no infrastructure'], answer: 1, explain: 'Tabletop walks through scenarios; full DR actually fails over. Both have a place in resilience programs.' },
      { q: 'Hashing a downloaded ISO and comparing to vendor SHA-256 protects against:', options: ['Encryption', 'Tampering during download / mirror integrity', 'DoS', 'Phishing'], answer: 1, explain: 'Integrity check ensures the file matches what the vendor signed.' },
      { q: 'A user reports a webpage shows certificate warning. Best advice?', options: ['Click through and continue', 'Stop. Verify URL, check cert details (issuer, dates, hostname). Report if site is critical', 'Disable browser security', 'Reinstall OS'], answer: 1, explain: 'Cert warnings indicate MITM, expired cert, or misconfig. Never blindly accept.' },
      { q: 'Which password hashing algorithm is BEST for new applications?', options: ['MD5', 'SHA-1', 'Argon2id (or bcrypt/scrypt with proper cost params)', 'Plain SHA-256'], answer: 2, explain: 'Argon2id is the OWASP-recommended modern KDF. Plain hashing is vulnerable to GPU brute force.' },
      { q: 'Which key-management practice is BEST?', options: ['Reuse same key forever', 'Rotate keys regularly, separate duties for key use vs management, HSM-backed storage', 'Email keys', 'Plaintext keys in source'], answer: 1, explain: 'NIST SP 800-57 key lifecycle: generate, distribute, use, rotate, archive, destroy. HSM provides FIPS-validated protection.' },
      { q: 'Quantum-resistant (post-quantum) algorithms address:', options: ['Faster speed', 'Future risk of quantum computers breaking RSA/ECC via Shor\'s algorithm', 'Cheaper hardware', 'Smaller keys'], answer: 1, explain: 'NIST has standardized ML-KEM (Kyber), ML-DSA (Dilithium) etc. for post-quantum cryptography.' },
      { q: 'A device running an OS no longer receiving vendor security patches is:', options: ['Best for security', 'End-of-life / unsupported — high risk; isolate, replace, or compensating controls', 'Free', 'Faster'], answer: 1, explain: 'EOL systems accumulate unpatched vulns. Plan replacement; isolate on segmented network until then.' },
      { q: 'Which document classifies data and assigns handling rules (public, internal, confidential, restricted)?', options: ['Privacy policy', 'Data classification policy', 'EULA', 'AUP'], answer: 1, explain: 'Classification policy drives encryption, access control, retention.' },
      { q: 'A SaaS provider stores your customer data. To enforce who in your org can access it via SSO conditions, use:', options: ['Their default settings', 'Conditional Access / IdP policies + SCIM provisioning + CASB visibility', 'Email rules', 'NTP'], answer: 1, explain: 'Identity-driven access governance scales across SaaS app sprawl.' },
      { q: 'Which is a legitimate INDICATOR of compromise (IoC)?', options: ['Server uptime', 'New scheduled task + unfamiliar process beaconing to a known C2 IP at fixed intervals', 'Disk percent', 'CPU temperature'], answer: 1, explain: 'IoCs: known-bad hashes, IPs, domains, regkeys, behavioral patterns (beaconing).' },
      { q: 'Threat hunting goal vs alert response?', options: ['Same', 'Proactive — hypothesis-driven search for unknown adversaries in environment, not waiting for an alert', 'Just runs queries randomly', 'Patches systems'], answer: 1, explain: 'Hunters assume compromise and look for it. Distinct from reactive alert triage.' }
    ]
  },

  // ============================================================
  // CompTIA Linux+ (XK0-005)
  // ============================================================
  {
    id: 'linuxplus',
    name: 'CompTIA Linux+',
    short: 'Linux+',
    code: 'XK0-005',
    badge: 'CompTIA',
    type: 'comptia',
    desc: 'System management, security, scripting, automation, troubleshooting.',
    lessons: [
      {
        title: '1. Filesystem & Navigation',
        body: `
          <h2>FHS key dirs</h2>
          <ul>
            <li><code>/etc</code> — config files.</li>
            <li><code>/var</code> — logs, spool, variable data.</li>
            <li><code>/home</code> — user homes.</li>
            <li><code>/usr</code> — userland binaries, libraries.</li>
            <li><code>/bin</code>, <code>/sbin</code> — essential binaries.</li>
            <li><code>/opt</code> — third-party packages.</li>
            <li><code>/proc</code>, <code>/sys</code> — virtual kernel info.</li>
            <li><code>/tmp</code> — ephemeral; cleared on reboot.</li>
          </ul>
          <h2>Navigation</h2>
          <pre><code>pwd
cd /etc/nginx
ls -la
cp -r src dst
mv old new
rm -rf dir
mkdir -p a/b/c
ln -s target link
find / -name "*.conf"
locate sshd_config</code></pre>
        `
      },
      {
        title: '2. Permissions & Ownership',
        body: `
          <h2>Symbolic & octal</h2>
          <p>Each file has rwx for user/group/other.</p>
          <pre><code>chmod 755 script.sh   rwx r-x r-x
chmod u+x file
chmod g-w file
chown user:group file
chgrp staff file</code></pre>
          <h2>Special bits</h2>
          <ul>
            <li><b>SUID (4xxx)</b> — run as file owner. <code>/usr/bin/passwd</code>.</li>
            <li><b>SGID (2xxx)</b> — run as group / inherit group on dirs.</li>
            <li><b>Sticky (1xxx)</b> — only owner can delete in shared dir (e.g., <code>/tmp</code>).</li>
          </ul>
          <h2>ACLs</h2>
          <pre><code>getfacl file
setfacl -m u:alice:rw file</code></pre>
        `
      },
      {
        title: '3. Users & Groups',
        body: `
          <pre><code>useradd -m -s /bin/bash alice
passwd alice
usermod -aG sudo alice          add to group (append!)
userdel -r alice
groupadd devs
id alice
who / w / last</code></pre>
          <h2>Key files</h2>
          <ul>
            <li><code>/etc/passwd</code> — accounts.</li>
            <li><code>/etc/shadow</code> — hashed passwords.</li>
            <li><code>/etc/group</code>, <code>/etc/gshadow</code>.</li>
            <li><code>/etc/sudoers</code> — edited via <code>visudo</code>.</li>
          </ul>
        `
      },
      {
        title: '4. Processes & systemd',
        body: `
          <pre><code>ps aux | grep nginx
top / htop
kill -9 PID
pkill -f pattern
nice -n 10 cmd
renice -n 5 -p PID
jobs / bg / fg
nohup cmd &</code></pre>
          <h2>systemd</h2>
          <pre><code>systemctl status sshd
systemctl start|stop|restart|reload sshd
systemctl enable|disable sshd
systemctl list-units --type=service
journalctl -u sshd -f
systemctl daemon-reload
systemctl get-default          # graphical.target / multi-user.target</code></pre>
        `
      },
      {
        title: '5. Package Management',
        body: `
          <h2>Debian / Ubuntu (apt + dpkg)</h2>
          <pre><code>apt update && apt upgrade
apt install nginx
apt remove nginx
apt search keyword
dpkg -i pkg.deb
dpkg -l | grep nginx</code></pre>
          <h2>RHEL / Fedora (dnf + rpm)</h2>
          <pre><code>dnf install httpd
dnf update
dnf remove httpd
rpm -ivh pkg.rpm
rpm -qa | grep httpd</code></pre>
          <h2>Universal</h2>
          <p>Snap, Flatpak, AppImage.</p>
        `
      },
      {
        title: '6. Networking',
        body: `
          <pre><code>ip a                interfaces
ip r                routes
ip link set eth0 up
nmcli device status      NetworkManager
ss -tunlp                listening sockets
ping host
traceroute host
dig host / nslookup host
curl -I https://x.com
wget https://x.com/file</code></pre>
          <h2>Config files</h2>
          <p><code>/etc/hosts</code>, <code>/etc/resolv.conf</code>, <code>/etc/netplan/*.yaml</code> (Ubuntu), <code>/etc/sysconfig/network-scripts/</code> (RHEL legacy).</p>
          <h2>Firewall</h2>
          <pre><code>firewall-cmd --add-service=https --permanent
firewall-cmd --reload
ufw allow 22/tcp
ufw enable
iptables -L -n -v</code></pre>
        `
      },
      {
        title: '7. Storage & Filesystems',
        body: `
          <pre><code>lsblk
fdisk -l
parted /dev/sdb mklabel gpt
mkfs.ext4 /dev/sdb1
mkfs.xfs  /dev/sdc1
mount /dev/sdb1 /mnt/data
umount /mnt/data
df -h
du -sh /var/log</code></pre>
          <h2>Persist mounts</h2>
          <p><code>/etc/fstab</code> — UUID, mountpoint, fs type, options, dump, pass.</p>
          <h2>LVM</h2>
          <p>Physical Volume → Volume Group → Logical Volume. Resize without unmount (with xfs/ext4).</p>
          <pre><code>pvcreate /dev/sdb
vgcreate vg0 /dev/sdb
lvcreate -L 20G -n data vg0
mkfs.xfs /dev/vg0/data</code></pre>
        `
      },
      {
        title: '8. Shell Scripting (bash)',
        body: `
          <pre><code>#!/usr/bin/env bash
set -euo pipefail

NAME=\${1:-world}
if [[ -z "$NAME" ]]; then
  echo "no name" >&2
  exit 1
fi

for f in *.log; do
  [[ -f "$f" ]] || continue
  lines=$(wc -l &lt; "$f")
  echo "$f: $lines lines"
done

# function
greet() { echo "hi $1"; }
greet "$NAME"</code></pre>
          <h2>Tools</h2>
          <p><code>grep</code>, <code>sed</code>, <code>awk</code>, <code>cut</code>, <code>sort</code>, <code>uniq</code>, <code>tr</code>, <code>xargs</code>, <code>tee</code>, <code>jq</code> (JSON).</p>
        `
      },
      {
        title: '9. Security Hardening',
        body: `
          <ul>
            <li>Disable root SSH (<code>PermitRootLogin no</code>), use key auth.</li>
            <li>Use <code>sudo</code> + groups; avoid generic privileged accounts.</li>
            <li>Enable firewall; close unused ports.</li>
            <li>Apply updates: <code>unattended-upgrades</code> / <code>dnf-automatic</code>.</li>
            <li>SELinux (RHEL): <code>getenforce</code>, contexts (<code>ls -Z</code>), <code>setsebool</code>.</li>
            <li>AppArmor (Ubuntu): <code>aa-status</code>.</li>
            <li>fail2ban for brute-force protection.</li>
            <li>Audit with <code>auditd</code> / <code>ausearch</code>.</li>
            <li>File integrity: <code>aide</code> / Tripwire.</li>
          </ul>
          <h2>SSH keys</h2>
          <pre><code>ssh-keygen -t ed25519 -C "me@host"
ssh-copy-id user@host</code></pre>
        `
      },
      {
        title: '10. Troubleshooting',
        body: `
          <h2>Where to look</h2>
          <pre><code>journalctl -xe
journalctl --since "1 hour ago"
dmesg | tail
/var/log/messages    (RHEL)
/var/log/syslog      (Debian)
/var/log/auth.log    or  /var/log/secure
/var/log/nginx/      service logs</code></pre>
          <h2>Performance</h2>
          <pre><code>uptime / load average
free -h
vmstat 2 5
iostat -xz 2
sar -u 1 5
lsof -i :443        what's on port 443
strace -p PID
htop</code></pre>
          <h2>Boot issues</h2>
          <p>Edit GRUB at boot, add <code>init=/bin/bash</code> or use rescue mode. <code>grub-mkconfig -o /boot/grub/grub.cfg</code> to regenerate.</p>
        `
      }
    ],
    quiz: [
      { q: 'Which file holds hashed user passwords?', options: ['/etc/passwd', '/etc/shadow', '/etc/group', '/etc/sudoers'], answer: 1, explain: '/etc/shadow stores hashed passwords; readable only by root.' },
      { q: 'chmod 755 file gives:', options: ['rwx rwx rwx', 'rwx r-x r-x', 'rw- r-- r--', 'r-- r-- r--'], answer: 1, explain: '7=rwx, 5=r-x. So owner rwx, group r-x, other r-x.' },
      { q: 'Which command lists listening sockets with their owning PIDs?', options: ['netstat -i', 'ss -tunlp', 'route -n', 'ip link'], answer: 1, explain: '`ss -tunlp` shows TCP/UDP listeners + processes.' },
      { q: 'To add a user to the sudo group WITHOUT removing existing group memberships:', options: ['usermod -G sudo alice', 'usermod -aG sudo alice', 'gpasswd -d sudo alice', 'useradd -G sudo alice'], answer: 1, explain: 'The -a (append) flag is critical; without it, other groups are dropped.' },
      { q: 'Which target is the equivalent of multi-user (no GUI)?', options: ['graphical.target', 'multi-user.target', 'rescue.target', 'emergency.target'], answer: 1, explain: 'multi-user.target ≈ runlevel 3.' },
      { q: 'Which command resizes a logical volume by adding 10G?', options: ['lvresize -L +10G /dev/vg0/data', 'pvextend /dev/sdb', 'vgreduce vg0 /dev/sdb', 'mkfs.xfs /dev/vg0/data'], answer: 0, explain: '`lvresize -L +10G` extends the LV. Then grow the filesystem.' },
      { q: 'Which package manager is native to Debian/Ubuntu?', options: ['dnf', 'rpm', 'apt', 'pacman'], answer: 2, explain: 'apt is the high-level tool on Debian-family distros.' },
      { q: 'A process is using 100% CPU. Which command shows it sorted live by CPU?', options: ['ps aux', 'top', 'lsof', 'netstat'], answer: 1, explain: 'top (or htop) updates in real time, sorted by CPU by default.' },
      { q: 'Which file controls persistent mounts at boot?', options: ['/etc/mtab', '/etc/fstab', '/etc/mounts', '/etc/init.d/mount'], answer: 1, explain: '/etc/fstab — file system table read by systemd at boot.' },
      { q: 'SUID on /usr/bin/passwd allows:', options: ['Anyone to read /etc/shadow', 'The command to run as root regardless of the invoker', 'Group write access', 'Sticky deletion control'], answer: 1, explain: 'SUID makes the executable run with the owner (root) privileges, needed to update /etc/shadow.' },
      { q: 'Which tool views systemd service logs live?', options: ['tail -f /var/log/messages', 'journalctl -u sshd -f', 'cat /etc/systemd/system/sshd', 'logger'], answer: 1, explain: 'journalctl reads the systemd journal; -u filters by unit, -f follows.' },
      { q: 'To generate a modern SSH key:', options: ['ssh-keygen -t rsa -b 1024', 'ssh-keygen -t dsa', 'ssh-keygen -t ed25519', 'ssh-keygen -t md5'], answer: 2, explain: 'Ed25519 is the modern, fast, secure default. RSA-2048+ also acceptable; DSA deprecated.' },
      { q: 'A user reports "permission denied" running a script. Which fixes it (assuming content is OK)?', options: ['chmod 644 script.sh', 'chmod +x script.sh', 'chown root script.sh', 'umask 077'], answer: 1, explain: '+x grants execute bit.' },
      { q: 'On RHEL, SELinux current mode is shown by:', options: ['selinux-config', 'getenforce', 'sestatus -h', 'auditctl -l'], answer: 1, explain: 'getenforce prints Enforcing / Permissive / Disabled.' },
      { q: 'Which command extracts the 3rd column of a CSV by comma?', options: ['cut -d, -f3 file.csv', 'awk -F: \'{print $3}\' file.csv', 'sed -n \'3p\' file.csv', 'head -n 3 file.csv'], answer: 0, explain: 'cut -d, -f3 — delimiter comma, field 3.' },
      { q: 'Linux: find files modified in the last 24 hours under /var/log:', options: ['find /var/log -mtime -1', 'find /var/log -atime +1', 'find /var/log -size 1', 'find /var/log -type f'], answer: 0, explain: '-mtime -1 = modified within last day. +1 = older than 1 day.' },
      { q: 'Show kernel ring buffer messages (boot, hardware events):', options: ['journalctl -k or dmesg', 'logger', 'syslog show', 'audit'], answer: 0, explain: 'dmesg or `journalctl -k` print kernel messages.' },
      { q: 'A package is held back from apt upgrade. Most likely cause?', options: ['Network outage', 'Held by apt-mark hold or dependency conflict', 'Wrong distro', 'Disk full only'], answer: 1, explain: 'Check with `apt-mark showhold` or run `apt full-upgrade` to see held deps.' },
      { q: 'Which command shows CPU + memory + uptime + load in one snapshot?', options: ['uptime', 'top -bn1', 'free -h', 'lscpu'], answer: 1, explain: '`top -bn1` runs one batch iteration printing the standard top view.' },
      { q: 'Persistent network config on modern Ubuntu uses:', options: ['/etc/network/interfaces (legacy)', 'Netplan YAML in /etc/netplan/', 'systemd-resolved only', 'Cron jobs'], answer: 1, explain: 'Ubuntu 18.04+ uses Netplan to render configs for NetworkManager or systemd-networkd.' },
      { q: 'Which command creates a tar archive compressed with gzip?', options: ['tar -czf backup.tar.gz /etc', 'tar -xvf backup.tar', 'zip /etc backup.zip', 'gzip /etc'], answer: 0, explain: '-c create, -z gzip, -f file. Extract with -xzf.' },
      { q: 'View who currently has root via sudo (recent commands):', options: ['cat /etc/passwd', 'sudo journalctl _COMM=sudo | tail', 'last -i', 'crontab -l'], answer: 1, explain: 'sudo events are logged to journal/auth.log. `journalctl _COMM=sudo` or grep /var/log/auth.log for sudo entries.' },
      { q: 'How to switch to single-user (rescue) mode on a running systemd Linux?', options: ['init 1', 'systemctl isolate rescue.target', 'shutdown -h', 'reboot'], answer: 1, explain: '`systemctl isolate rescue.target` (or emergency.target). init 1 works on SysV-init.' },
      { q: 'A web server\'s SSL cert expired. Quickest renewal for Let\'s Encrypt setup?', options: ['Buy new cert manually', 'certbot renew + reload web server', 'Recompile OpenSSL', 'Disable HTTPS'], answer: 1, explain: '`certbot renew` checks and renews near-expiry certs; cron/timer usually automates this.' },
      { q: 'A user cannot write to their home directory. ls -ld /home/alice shows drwxr-xr-x root. Fix?', options: ['chmod 777', 'chown -R alice:alice /home/alice', 'Reboot', 'Delete /home'], answer: 1, explain: 'Home dir owner should be the user, not root. chown -R fixes ownership.' },
      { q: 'Which file holds cron jobs system-wide?', options: ['/etc/cron.allow', '/etc/crontab and /etc/cron.d/*', '/var/spool/cron', '/etc/init.d/cron'], answer: 1, explain: '/etc/crontab is system; user crontabs are in /var/spool/cron/crontabs/.' },
      { q: 'systemd timer vs cron — primary advantage?', options: ['Faster only', 'Better logging via journal, dependency on units, calendar expressions, persistence after missed runs', 'Cron has no logs', 'Cron is deprecated'], answer: 1, explain: 'systemd timers integrate with services and journal. Cron remains widely used + simple.' },
      { q: 'Show all open file handles for a process (PID 1234):', options: ['ls -la 1234', 'lsof -p 1234', 'ps 1234', 'top -p 1234'], answer: 1, explain: '`lsof -p PID` lists files, sockets, devices held open by that process.' },
      { q: 'Read large gzip-compressed log without uncompressing to disk:', options: ['zcat file.gz | less', 'cat file.gz', 'gunzip file.gz', 'tar -tzf'], answer: 0, explain: 'zcat / zless / zgrep stream-decompress on the fly.' },
      { q: 'Which is BEST for mass-deploying configs across many servers?', options: ['Manual SSH', 'Ansible / Puppet / Chef / Salt (configuration management)', 'Email instructions', 'Reinstall each'], answer: 1, explain: 'CM tools provide idempotent, repeatable infra as code.' },
      { q: 'Container vs VM key difference?', options: ['Identical', 'Container shares host kernel (lighter, faster) — VM has its own kernel via hypervisor', 'VM is smaller', 'Container needs hypervisor'], answer: 1, explain: 'Containers = OS-level virtualization. VMs = hardware-level.' },
      { q: 'Show systemd units that failed at last boot:', options: ['systemctl --failed', 'systemctl status all', 'top', 'who'], answer: 0, explain: '`systemctl --failed` lists units in failed state.' },
      { q: 'A bash script must exit immediately on any error and treat undefined vars as errors:', options: ['set -e', 'set -eu', 'set -euo pipefail', 'set +e'], answer: 2, explain: 'pipefail catches errors mid-pipeline. The full triad is best-practice.' },
      { q: 'Generate a SHA-256 checksum of a file:', options: ['md5sum file', 'sha256sum file', 'hash file', 'sum file'], answer: 1, explain: 'sha256sum outputs hash + filename. MD5/SHA-1 are weak — avoid for security.' },
      { q: 'Which Linux user/group is typically owner of journal files?', options: ['root:root', 'systemd-journal:systemd-journal', 'admin:admin', 'No owner'], answer: 1, explain: 'Journal directory is owned by root:systemd-journal; members of that group can read.' },
      { q: 'Read-only root filesystem most commonly used for:', options: ['Speed', 'Embedded / appliance / immutable infrastructure security posture', 'Backups only', 'Encryption'], answer: 1, explain: 'Read-only root prevents tampering; runtime state lives in tmpfs/overlay. Common in IoT, containers, kiosks.' },
      { q: 'XFS vs ext4 — XFS strength is:', options: ['Tiny filesystems', 'Large files + parallel I/O scaling', 'Encrypted', 'Boot only'], answer: 1, explain: 'XFS handles huge files + high concurrency well. ext4 is excellent general-purpose default.' },
      { q: 'Which tool boots a Linux system into ZFS or Btrfs snapshots for rollback?', options: ['LVM only', 'GRUB menu entries for snapshots (Btrfs) or boot environments (ZFS)', 'systemd-resolved', 'NetworkManager'], answer: 1, explain: 'Both filesystems support boot-environment style rollbacks via snapshot mounts.' },
      { q: 'Configure passwordless SSH for automation user:', options: ['Reuse personal password', 'Ed25519 key pair, authorized_keys, restrict via from= and command=', 'Telnet', 'Plaintext'], answer: 1, explain: 'Key pair + restrictions in authorized_keys (forced command, source IP) for hardened automation.' },
      { q: 'A cron job runs but its environment is missing PATH/variables. Fix?', options: ['Reinstall cron', 'Set explicit PATH= at top of crontab, or source env file in script', 'Run as root', 'Reboot'], answer: 1, explain: 'Cron runs minimal env. Always export PATH and important vars at script start.' },
      { q: 'Which command renames in-place during file copy and verifies hash?', options: ['cp src dst && sha256sum src dst', 'mv src dst', 'rsync -avc src dst', 'tar src dst'], answer: 2, explain: 'rsync -c uses checksum compare. -a archive, -v verbose. Excellent for safe migration.' },
      { q: 'Encrypt an existing disk with LUKS:', options: ['Just chmod 600', 'cryptsetup luksFormat /dev/sdX (DESTRUCTIVE — backup first)', 'echo encrypt', 'tar with password'], answer: 1, explain: 'LUKS is the standard Linux full-disk encryption. luksFormat erases data; backup, format, restore.' },
      { q: 'A new kernel was installed but system still boots old kernel. Fix?', options: ['Reinstall Linux', 'Update bootloader (grub-mkconfig) and set default kernel', 'Disk full only', 'Recompile'], answer: 1, explain: 'Regenerate grub.cfg + grub-set-default. Verify EFI entries on UEFI systems.' },
      { q: 'List network namespaces on the system:', options: ['ip netns list', 'ifconfig', 'route -n', 'arp -a'], answer: 0, explain: '`ip netns` manages network namespaces — used by containers.' },
      { q: 'Linux capability that removes need to set SUID on entire binary?', options: ['SELinux only', 'Capabilities (e.g., cap_net_bind_service) granted per-binary', 'chroot', 'umask'], answer: 1, explain: 'POSIX capabilities split root privileges. setcap cap_net_bind_service=+ep /path/binary.' },
      { q: 'Quickly serve a file over HTTP from a Linux box (one-liner):', options: ['python3 -m http.server', 'nginx full install', 'apache2 full install', 'tomcat'], answer: 0, explain: '`python3 -m http.server 8000` serves current directory. Useful for ad-hoc transfers.' },
      { q: 'A swap partition is filled, system thrashes. Best long-term fix?', options: ['Increase swap forever', 'Add RAM, tune vm.swappiness, identify memory leak with process accounting', 'Disable swap entirely', 'Reboot daily'], answer: 1, explain: 'Heavy swapping = under-provisioned or leaky. Diagnose with smem/ps + cgroup memory limits.' },
      { q: 'Linux: monitor a directory for changes:', options: ['inotifywait', 'tail -f', 'watch ls', 'cron job'], answer: 0, explain: 'inotifywait (inotify-tools) fires on FS events.' },
      { q: 'Which auditing daemon ships with RHEL for syscall-level logging?', options: ['rsyslog', 'auditd (ausearch / aureport)', 'logger', 'journald only'], answer: 1, explain: 'auditd records syscalls/file accesses per rules in /etc/audit/audit.rules.' },
      { q: 'systemd nspawn provides:', options: ['Web hosting', 'Container-like environment using systemd as host PID 1 inside', 'Disk encryption', 'Networking'], answer: 1, explain: 'systemd-nspawn is a chroot+ on steroids, useful for booting full system images.' },
      { q: 'Find which process is listening on port 8080:', options: ['ss -tunlp | grep 8080', 'cat /proc/8080', 'ls /var/run', 'route'], answer: 0, explain: '`ss -tunlp` (or lsof -i :8080) reveals listener + PID.' },
      { q: 'Hardening sshd_config: which line disables password auth?', options: ['PermitRootLogin no', 'PasswordAuthentication no', 'AllowUsers all', 'X11Forwarding yes'], answer: 1, explain: 'PasswordAuthentication no forces key-based auth. Combine with PermitRootLogin prohibit-password.' }
    ]
  },

  // ============================================================
  // CompTIA Cloud+ (CV0-004)
  // ============================================================
  {
    id: 'cloudplus',
    name: 'CompTIA Cloud+',
    short: 'Cloud+',
    code: 'CV0-004',
    badge: 'CompTIA',
    type: 'comptia',
    desc: 'Cloud architecture, deployment, security, operations, automation.',
    lessons: [
      {
        title: '1. Cloud Service & Deployment Models',
        body: `
          <h2>Service models</h2>
          <ul>
            <li><b>IaaS</b> — VMs, networks, storage (AWS EC2, Azure VM, GCP CE).</li>
            <li><b>PaaS</b> — runtime / app platform (App Service, Cloud Run, Elastic Beanstalk).</li>
            <li><b>SaaS</b> — finished apps (M365, Salesforce).</li>
            <li><b>FaaS / Serverless</b> — event-driven functions (Lambda, Azure Functions).</li>
            <li><b>DBaaS / Storage-as-a-Service</b> — managed DB and object storage.</li>
          </ul>
          <h2>Deployment models</h2>
          <p>Public, Private, Hybrid, Community, Multi-cloud. Edge / fog for latency-sensitive.</p>
          <h2>Shared responsibility</h2>
          <p>Provider secures <i>of</i> the cloud. Customer secures <i>in</i> the cloud — varies by model (most responsibility in IaaS, least in SaaS).</p>
        `
      },
      {
        title: '2. Compute & Containers',
        body: `
          <h2>Compute types</h2>
          <ul>
            <li>Reserved / committed-use instances — cheapest if you commit.</li>
            <li>On-demand / pay-as-you-go.</li>
            <li>Spot / preemptible — deep discount, can be reclaimed.</li>
            <li>Dedicated host / bare metal — compliance, license-bound software.</li>
          </ul>
          <h2>Containers</h2>
          <p>OS-level virtualization. Image = read-only layers. Container = running instance. Engine: Docker, containerd.</p>
          <h2>Orchestration (Kubernetes)</h2>
          <ul>
            <li>Control plane: kube-apiserver, scheduler, controller-manager, etcd.</li>
            <li>Node: kubelet, container runtime, kube-proxy.</li>
            <li>Workloads: Pod, Deployment, StatefulSet, DaemonSet, Job.</li>
            <li>Service types: ClusterIP, NodePort, LoadBalancer, Ingress.</li>
          </ul>
        `
      },
      {
        title: '3. Cloud Storage',
        body: `
          <h2>Storage classes</h2>
          <ul>
            <li><b>Block</b> — like a disk; attach to VMs (EBS, Azure Disk, Persistent Disk).</li>
            <li><b>File</b> — shared mountable filesystem (EFS, Azure Files).</li>
            <li><b>Object</b> — key-based, HTTP API, virtually unlimited (S3, Blob, GCS).</li>
          </ul>
          <h2>Tiers</h2>
          <p>Hot → Cool → Archive. Trade access latency for cost. Lifecycle policies move objects automatically.</p>
          <h2>Replication & durability</h2>
          <p>LRS, ZRS (zone), GRS / cross-region. Object storage often 11 nines (99.999999999%) durability.</p>
          <h2>Snapshots & backups</h2>
          <p>Snapshots are point-in-time, incremental, fast restore. Immutable / WORM buckets defend against ransomware.</p>
        `
      },
      {
        title: '4. Cloud Networking',
        body: `
          <ul>
            <li><b>VPC / VNet</b> — isolated virtual network with subnets, route tables.</li>
            <li><b>Subnets</b> — public (route to internet GW) vs private.</li>
            <li><b>Security groups / NSGs</b> — stateful instance-level firewall.</li>
            <li><b>NACLs</b> — stateless subnet-level.</li>
            <li><b>Load balancers</b> — L4 (NLB) and L7 (ALB / App Gateway).</li>
            <li><b>CDN</b> — CloudFront, Azure Front Door — edge cache.</li>
            <li><b>Connectivity</b> — VPN gateway (IPsec), Direct Connect / ExpressRoute (private).</li>
            <li><b>Peering</b> — VPC-to-VPC; <b>Transit Gateway</b> hub.</li>
            <li><b>Private endpoints</b> — access SaaS over private IP.</li>
          </ul>
        `
      },
      {
        title: '5. Identity & Access in Cloud',
        body: `
          <ul>
            <li><b>IAM users, groups, roles</b> — roles assumed temporarily; preferred over long-lived keys.</li>
            <li><b>Policies</b> — JSON, allow/deny on actions + resources + conditions.</li>
            <li><b>SCPs (AWS Org)</b> / <b>Azure Management Groups</b> — guardrails.</li>
            <li><b>Federation</b> — SAML / OIDC to corporate IdP.</li>
            <li><b>MFA + conditional access</b> mandatory for admins.</li>
            <li><b>Secrets</b> — KMS / Key Vault / Secrets Manager.</li>
          </ul>
          <p>Principle: <b>least privilege</b>, rotate credentials, use short-lived tokens (STS / managed identities).</p>
        `
      },
      {
        title: '6. Cloud Security',
        body: `
          <ul>
            <li><b>Encryption</b> — at rest (AES-256 default), in transit (TLS), client-side, customer-managed keys (CMK / BYOK).</li>
            <li><b>Network security</b> — segmentation, security groups, WAF, DDoS protection (Shield, Front Door, Cloudflare).</li>
            <li><b>Posture mgmt (CSPM)</b> — detect misconfigs (open S3, public RDP).</li>
            <li><b>Workload protection (CWPP)</b> — EDR-equivalent for VMs/containers.</li>
            <li><b>SIEM / cloud-native logging</b> — CloudTrail, Azure Activity Log, GCP Audit Logs.</li>
            <li><b>Compliance frameworks</b> — FedRAMP, SOC 2, ISO 27001, HIPAA, PCI-DSS.</li>
          </ul>
        `
      },
      {
        title: '7. Automation & IaC',
        body: `
          <h2>Infrastructure as Code</h2>
          <ul>
            <li><b>Terraform / OpenTofu</b> — provider-agnostic, HCL.</li>
            <li><b>CloudFormation</b> — AWS-native YAML/JSON.</li>
            <li><b>ARM templates / Bicep</b> — Azure-native.</li>
            <li><b>Pulumi</b> — real programming languages.</li>
            <li><b>Ansible / Chef / Puppet</b> — config management.</li>
          </ul>
          <h2>CI/CD</h2>
          <p>GitHub Actions, GitLab CI, Azure DevOps, Jenkins. Pipeline: lint → test → build → scan → deploy. Use environments + manual approvals for prod.</p>
          <h2>GitOps</h2>
          <p>Git is source of truth; ArgoCD/Flux reconciles cluster state to repo.</p>
        `
      },
      {
        title: '8. Performance, Scaling, HA',
        body: `
          <h2>Scaling</h2>
          <ul>
            <li><b>Vertical</b> — bigger instance (limits, downtime).</li>
            <li><b>Horizontal</b> — more instances behind LB. Stateless apps scale freely.</li>
            <li><b>Auto-scaling groups</b> — track CPU, queue depth, custom metrics.</li>
          </ul>
          <h2>HA design</h2>
          <ul>
            <li>Multi-AZ within a region for failure isolation.</li>
            <li>Multi-region for disaster recovery.</li>
            <li>Stateless tier behind LB; stateful tier with replication (RDS Multi-AZ, Cosmos DB, etc.).</li>
            <li>Health checks + circuit breakers + graceful degradation.</li>
          </ul>
          <h2>DR strategies</h2>
          <p>Backup-restore → Pilot light → Warm standby → Multi-site active-active. Track <b>RTO</b> & <b>RPO</b>.</p>
        `
      },
      {
        title: '9. Monitoring & Cost',
        body: `
          <h2>Observability pillars</h2>
          <ul>
            <li><b>Metrics</b> — CloudWatch, Azure Monitor, Stackdriver, Prometheus.</li>
            <li><b>Logs</b> — central log groups, queries (CloudWatch Insights, KQL).</li>
            <li><b>Traces</b> — X-Ray, App Insights, OpenTelemetry.</li>
          </ul>
          <h2>Alerting</h2>
          <p>SLO-driven (e.g., 99.9% availability); page only on actionable events. Runbooks linked.</p>
          <h2>FinOps</h2>
          <ul>
            <li>Tag resources by app/owner/env.</li>
            <li>Use budgets and anomaly detection.</li>
            <li>Right-size, schedule shutdowns, use spot + reservations.</li>
            <li>Lifecycle policies on object storage.</li>
            <li>Egress is the silent killer — design to keep traffic in-region.</li>
          </ul>
        `
      },
      {
        title: '10. Troubleshooting Cloud',
        body: `
          <h2>Standard playbook</h2>
          <ol>
            <li>Check provider status page first.</li>
            <li>Verify IAM/permissions if API errors.</li>
            <li>Check security groups / NACLs / route tables for connectivity issues.</li>
            <li>Inspect logs (Activity / CloudTrail) for recent changes.</li>
            <li>Look at metrics — CPU, memory, latency, error rate.</li>
            <li>Compare against a known-good baseline.</li>
          </ol>
          <h2>Common gotchas</h2>
          <ul>
            <li>Missing public IP on subnet → no Internet.</li>
            <li>Default routes pointing to NAT not IGW for private subnets.</li>
            <li>DNS resolution between VPCs requires Route 53 resolver / private zones.</li>
            <li>Service quotas / limits silently throttle.</li>
            <li>IAM eventual consistency — newly granted permissions need a brief retry.</li>
          </ul>
        `
      }
    ],
    quiz: [
      { q: 'Which model removes the most customer responsibility?', options: ['IaaS', 'PaaS', 'SaaS', 'On-prem'], answer: 2, explain: 'SaaS = provider runs everything; customer only manages data and identity.' },
      { q: 'Which storage type is BEST for an OS boot disk on a VM?', options: ['Block', 'File', 'Object', 'Archive'], answer: 0, explain: 'Block storage = disk-like, low latency, attachable to a single VM.' },
      { q: 'Which compute option is cheapest but may be terminated by the provider?', options: ['Reserved', 'Dedicated', 'Spot', 'On-demand'], answer: 2, explain: 'Spot / preemptible — deep discount, no availability guarantee.' },
      { q: 'In Kubernetes, which exposes a Pod inside the cluster only?', options: ['LoadBalancer', 'NodePort', 'ClusterIP', 'Ingress'], answer: 2, explain: 'ClusterIP is the default in-cluster-only service type.' },
      { q: 'Which gives PRIVATE connectivity from on-prem to AWS bypassing the Internet?', options: ['VPN gateway', 'Direct Connect', 'Internet Gateway', 'NAT Gateway'], answer: 1, explain: 'AWS Direct Connect (Azure ExpressRoute equivalent) is dedicated private link.' },
      { q: 'A stateless web tier should scale primarily by:', options: ['Vertical scaling', 'Horizontal scaling', 'Cold restart', 'Manual snapshots'], answer: 1, explain: 'Stateless apps scale horizontally behind a load balancer.' },
      { q: 'Which storage tier offers the LOWEST cost with highest retrieval latency?', options: ['Hot', 'Cool', 'Archive', 'Standard'], answer: 2, explain: 'Archive (Glacier Deep Archive / Azure Archive) is cheapest, hours to retrieve.' },
      { q: 'CSPM is used to:', options: ['Block DDoS attacks', 'Detect cloud misconfigurations', 'Encrypt data at rest', 'Generate IaC code'], answer: 1, explain: 'Cloud Security Posture Management scans configs for risk (open buckets, weak IAM).' },
      { q: 'Which IaC tool is provider-agnostic and uses HCL?', options: ['CloudFormation', 'ARM templates', 'Terraform', 'Bicep'], answer: 2, explain: 'Terraform uses HCL across many providers.' },
      { q: 'A multi-AZ deployment primarily protects against:', options: ['Region-wide outage', 'Single-AZ datacenter failure', 'Account compromise', 'DDoS'], answer: 1, explain: 'AZs are isolated fault domains within a region — multi-AZ survives one AZ down. Region outage needs multi-region.' },
      { q: 'NACLs differ from security groups in that NACLs are:', options: ['Stateful, instance-level', 'Stateless, subnet-level', 'Stateful, subnet-level', 'Stateless, instance-level'], answer: 1, explain: 'NACLs are stateless and apply at the subnet boundary; SGs are stateful at instance level.' },
      { q: 'Customer-Managed Keys (CMK) primarily provide:', options: ['Faster encryption', 'Customer control over key lifecycle and access', 'Cheaper storage', 'Automated patching'], answer: 1, explain: 'CMK lets the customer rotate, disable, and audit keys; provider holds the data but cannot decrypt without key access.' },
      { q: 'RPO measures:', options: ['Time to restore service', 'Acceptable data loss window', 'Mean time between failures', 'Availability percentage'], answer: 1, explain: 'Recovery Point Objective = how much recent data you can afford to lose.' },
      { q: 'Egress data transfer cost is highest when:', options: ['Within the same AZ', 'Between AZs in the same region', 'Out to the Internet', 'To a same-region S3 bucket'], answer: 2, explain: 'Internet egress is the most expensive tier. In-region/same-AZ traffic is cheapest or free.' },
      { q: 'A pod cannot reach an external API after a network policy was applied. The likely cause:', options: ['IAM permission missing', 'Network policy default-deny egress', 'Region outage', 'Image pull failure'], answer: 1, explain: 'NetworkPolicy with default-deny will block egress unless explicitly allowed.' }
    ]
  },

  // ============================================================
  // Microsoft AZ-900 — Azure Fundamentals (entry-level MS cert)
  // ============================================================
  {
    id: 'az900',
    name: 'Azure Fundamentals',
    short: 'AZ-900',
    code: 'AZ-900',
    badge: 'Microsoft',
    type: 'microsoft',
    desc: 'Entry-level Microsoft cloud cert. Cloud concepts, Azure architecture, services, governance.',
    lessons: [
      {
        title: '1. Cloud Concepts',
        body: `
          <h2>Benefits</h2>
          <ul>
            <li><b>High availability</b> — SLA-backed uptime via redundancy.</li>
            <li><b>Scalability</b> — vertical (scale up) and horizontal (scale out); manual or auto.</li>
            <li><b>Elasticity</b> — scale dynamically with demand.</li>
            <li><b>Reliability</b> — recover from failures.</li>
            <li><b>Predictability</b> — performance + cost.</li>
            <li><b>Security</b> — shared model + provider investment.</li>
            <li><b>Governance</b> — central policy.</li>
            <li><b>Manageability</b> — automation + monitoring.</li>
          </ul>
          <h2>Economic models</h2>
          <p><b>CapEx</b> = up-front purchase (on-prem). <b>OpEx</b> = pay-as-you-go (cloud). Consumption-based billing.</p>
        `
      },
      {
        title: '2. Cloud Service Models',
        body: `
          <h2>IaaS, PaaS, SaaS in Azure</h2>
          <ul>
            <li><b>IaaS</b> — Azure Virtual Machines, Virtual Networks. You manage OS+ up.</li>
            <li><b>PaaS</b> — Azure App Service, Azure SQL Database. Microsoft manages OS, runtime; you manage app + data.</li>
            <li><b>SaaS</b> — Microsoft 365, Dynamics 365. Microsoft manages everything; you manage data + users.</li>
          </ul>
          <h2>Shared responsibility</h2>
          <table style="width:100%;font-size:13px"><tr><th>Layer</th><th>IaaS</th><th>PaaS</th><th>SaaS</th></tr>
          <tr><td>Data / Identity</td><td>You</td><td>You</td><td>You</td></tr>
          <tr><td>App</td><td>You</td><td>You</td><td>MS</td></tr>
          <tr><td>OS</td><td>You</td><td>MS</td><td>MS</td></tr>
          <tr><td>Hypervisor / HW / DC</td><td>MS</td><td>MS</td><td>MS</td></tr>
          </table>
        `
      },
      {
        title: '3. Azure Architecture — Regions, AZs, Resource Hierarchy',
        body: `
          <h2>Physical</h2>
          <ul>
            <li><b>Region</b> — set of datacenters in a geographic area (East US, West Europe).</li>
            <li><b>Availability Zone</b> — physically separate DCs within a region. Most regions have 3.</li>
            <li><b>Region pair</b> — paired regions for geo-replication (East US ↔ West US).</li>
            <li><b>Sovereign regions</b> — Azure Government, Azure China.</li>
          </ul>
          <h2>Resource hierarchy</h2>
          <p><b>Management group → Subscription → Resource group → Resource</b>. Policies inherit down.</p>
          <ul>
            <li><b>Management group</b> — groups subscriptions for unified policy/RBAC.</li>
            <li><b>Subscription</b> — billing + access boundary.</li>
            <li><b>Resource group</b> — logical container; resources tied to one RG.</li>
            <li><b>Resource</b> — VM, storage account, etc.</li>
          </ul>
        `
      },
      {
        title: '4. Core Azure Services — Compute & Networking',
        body: `
          <h2>Compute</h2>
          <ul>
            <li><b>Virtual Machines</b> — IaaS, full OS control.</li>
            <li><b>VM Scale Sets</b> — auto-scaling identical VMs behind LB.</li>
            <li><b>App Service</b> — PaaS for web apps.</li>
            <li><b>Container Instances (ACI)</b> — single container, serverless.</li>
            <li><b>Azure Kubernetes Service (AKS)</b> — managed K8s.</li>
            <li><b>Azure Functions</b> — serverless / FaaS.</li>
            <li><b>Azure Virtual Desktop</b> — DaaS (Windows desktop in cloud).</li>
          </ul>
          <h2>Networking</h2>
          <ul>
            <li><b>Virtual Network (VNet)</b> — isolated network with subnets.</li>
            <li><b>VNet peering</b> — connect VNets.</li>
            <li><b>VPN Gateway</b> — site-to-site or point-to-site VPN over Internet.</li>
            <li><b>ExpressRoute</b> — private dedicated link to Azure.</li>
            <li><b>Azure DNS</b>, <b>Load Balancer</b> (L4), <b>Application Gateway</b> (L7 + WAF), <b>Front Door</b> (global L7 + CDN).</li>
          </ul>
        `
      },
      {
        title: '5. Storage & Databases',
        body: `
          <h2>Storage account services</h2>
          <ul>
            <li><b>Blob</b> — object storage. Tiers: Hot, Cool, Cold, Archive.</li>
            <li><b>Files</b> — SMB/NFS shares in cloud.</li>
            <li><b>Queue</b> — async messaging.</li>
            <li><b>Table</b> — key-value NoSQL.</li>
            <li><b>Disk</b> — managed disks for VMs.</li>
          </ul>
          <h2>Redundancy options</h2>
          <ul>
            <li><b>LRS</b> — 3 copies in 1 datacenter.</li>
            <li><b>ZRS</b> — 3 zones in 1 region.</li>
            <li><b>GRS</b> — LRS + async copy to paired region.</li>
            <li><b>GZRS</b> — ZRS + paired region.</li>
          </ul>
          <h2>Databases</h2>
          <p>Azure SQL Database (PaaS SQL), SQL Managed Instance, Azure Cosmos DB (multi-model NoSQL, global distribution), Azure Database for MySQL/PostgreSQL/MariaDB.</p>
        `
      },
      {
        title: '6. Identity — Microsoft Entra ID',
        body: `
          <p><b>Microsoft Entra ID</b> (formerly Azure Active Directory) is the cloud identity service.</p>
          <h2>Key features</h2>
          <ul>
            <li><b>SSO</b> across Microsoft + thousands of SaaS apps.</li>
            <li><b>MFA</b> — phone, authenticator app, FIDO2 keys.</li>
            <li><b>Conditional Access</b> — policies on user/device/location/risk.</li>
            <li><b>Identity Protection</b> — risk-based detection.</li>
            <li><b>Privileged Identity Management (PIM)</b> — just-in-time elevation for admin roles.</li>
            <li><b>External identities / B2B / B2C</b> — guests, customer-facing IAM.</li>
          </ul>
          <h2>Auth vs authz</h2>
          <p><b>Authentication</b> — Entra ID verifies who you are.<br><b>Authorization</b> — Azure RBAC decides what you can do on a resource.</p>
        `
      },
      {
        title: '7. Governance — RBAC, Policy, Locks, Blueprints',
        body: `
          <h2>Azure RBAC</h2>
          <p>Assign a <b>role</b> (Owner, Contributor, Reader, custom) to a <b>security principal</b> (user, group, SP, managed identity) at a <b>scope</b> (mgmt group → resource).</p>
          <h2>Azure Policy</h2>
          <p>Defines rules ("allowed locations", "must have tag X"). Evaluates resources, can audit or deny non-compliant. Initiatives = bundled policies.</p>
          <h2>Resource locks</h2>
          <ul>
            <li><b>ReadOnly</b> — block modifications.</li>
            <li><b>Delete (CanNotDelete)</b> — block deletion.</li>
          </ul>
          <h2>Tags</h2>
          <p>Key/value metadata for cost allocation, automation, ownership.</p>
        `
      },
      {
        title: '8. Cost Management & SLAs',
        body: `
          <h2>Pricing tools</h2>
          <ul>
            <li><b>Pricing Calculator</b> — estimate cost of services BEFORE deploying.</li>
            <li><b>TCO Calculator</b> — compare on-prem cost vs. Azure migration.</li>
            <li><b>Microsoft Cost Management</b> — analyze actual spend, budgets, alerts (post-deploy).</li>
            <li><b>Azure Advisor</b> — cost, security, reliability, performance recommendations.</li>
          </ul>
          <h2>Cost optimization</h2>
          <p>Reservations (1-yr / 3-yr commitment, up to 72% off), Azure Hybrid Benefit (use existing Windows/SQL licenses), Spot VMs, dev/test pricing, auto-shutdown.</p>
          <h2>SLAs</h2>
          <p>Service Level Agreement = guaranteed uptime % (e.g., 99.9%, 99.95%, 99.99%). Composite SLA = product of dependent service SLAs. Higher availability = multi-AZ / multi-region design.</p>
        `
      },
      {
        title: '9. Tools, Monitoring, Trust',
        body: `
          <h2>Management tools</h2>
          <ul>
            <li><b>Azure portal</b> — GUI.</li>
            <li><b>Azure CLI</b> — cross-platform shell (<code>az</code>).</li>
            <li><b>Azure PowerShell</b> — <code>Az</code> module.</li>
            <li><b>Cloud Shell</b> — browser shell with CLI/PS preloaded.</li>
            <li><b>ARM / Bicep / Terraform</b> — IaC.</li>
            <li><b>Azure Mobile App</b>.</li>
          </ul>
          <h2>Monitoring</h2>
          <ul>
            <li><b>Azure Monitor</b> — metrics, logs (Log Analytics), alerts.</li>
            <li><b>Application Insights</b> — APM for web apps.</li>
            <li><b>Service Health</b> — incidents affecting your services.</li>
            <li><b>Resource Health</b> — health of a specific resource.</li>
            <li><b>Microsoft Defender for Cloud</b> — CSPM + CWPP.</li>
            <li><b>Microsoft Sentinel</b> — cloud SIEM/SOAR.</li>
          </ul>
          <h2>Trust Center & Compliance</h2>
          <p>Service Trust Portal. Certifications: ISO 27001, SOC 1/2/3, FedRAMP, HIPAA, GDPR, PCI-DSS.</p>
        `
      },
      {
        title: '10. AZ-900 Exam Tips',
        body: `
          <h2>Format</h2>
          <p>~40–60 questions, 45–60 minutes. Multiple choice, drag-drop, scenario. Passing ~700/1000. No labs.</p>
          <h2>Domains (current weighting)</h2>
          <ul>
            <li>Cloud concepts — 25–30%</li>
            <li>Azure architecture & services — 35–40%</li>
            <li>Azure management & governance — 30–35%</li>
          </ul>
          <h2>Most-missed traps</h2>
          <ul>
            <li>Difference between Service Health vs Resource Health.</li>
            <li>Region pair behavior (paired by Microsoft, not user-selectable).</li>
            <li>Resource locks block delete even for Owners.</li>
            <li>Azure Policy ≠ RBAC (policy = what's allowed to exist, RBAC = who can do what).</li>
            <li>Cost Calc = estimate before; Cost Mgmt = analyze actual after.</li>
            <li>Entra ID is identity, not a directory replacement for on-prem AD unless Domain Services added.</li>
          </ul>
        `
      }
    ],
    quiz: [
      { q: 'Which Azure service is a PaaS offering for hosting web apps?', options: ['Virtual Machines', 'App Service', 'Container Instances', 'AKS'], answer: 1, explain: 'App Service is the PaaS web/API host. VMs = IaaS.' },
      { q: 'You need 3 physically separate DCs in one region. Which provides that?', options: ['Region pair', 'Availability Zones', 'Resource group', 'VNet peering'], answer: 1, explain: 'Availability Zones are physically separate datacenters within a region.' },
      { q: 'Which resource organizes Azure subscriptions for unified policy and RBAC?', options: ['Resource group', 'Management group', 'Subscription folder', 'Tag'], answer: 1, explain: 'Management groups sit above subscriptions for governance inheritance.' },
      { q: 'Which is the cheapest Azure storage redundancy?', options: ['LRS', 'ZRS', 'GRS', 'GZRS'], answer: 0, explain: 'LRS = 3 copies in 1 DC, cheapest. GZRS most resilient and most expensive.' },
      { q: 'Which tool estimates cost BEFORE deploying resources?', options: ['Cost Management', 'Pricing Calculator', 'Azure Advisor', 'Service Health'], answer: 1, explain: 'Pricing Calculator = pre-deploy estimate. Cost Management = post-deploy analysis.' },
      { q: 'A Delete lock on a resource blocks:', options: ['Reads', 'Writes', 'Deletes only', 'All operations'], answer: 2, explain: 'CanNotDelete lock blocks deletion but allows reads and modifications.' },
      { q: 'Conditional Access is a feature of:', options: ['Azure Firewall', 'Microsoft Entra ID', 'Azure Policy', 'Resource locks'], answer: 1, explain: 'Conditional Access policies apply during Entra ID sign-in.' },
      { q: 'Which provides PRIVATE dedicated connectivity to Azure bypassing the Internet?', options: ['VPN Gateway', 'ExpressRoute', 'Front Door', 'Application Gateway'], answer: 1, explain: 'ExpressRoute = private circuit. VPN Gateway runs over Internet.' },
      { q: 'Azure Policy is BEST used to:', options: ['Grant access to resources', 'Enforce organizational rules (allowed locations, required tags)', 'Replicate data across regions', 'Estimate cost'], answer: 1, explain: 'Policy enforces what configurations are allowed. RBAC governs who can act.' },
      { q: 'A serverless function event handler in Azure is called:', options: ['Logic App', 'Azure Function', 'WebJob', 'Runbook'], answer: 1, explain: 'Azure Functions = FaaS. Logic Apps = visual workflows (also serverless but different model).' },
      { q: 'Which Azure benefit lets you use existing on-prem Windows/SQL licenses?', options: ['Reservations', 'Spot VMs', 'Azure Hybrid Benefit', 'Dev/Test pricing'], answer: 2, explain: 'Azure Hybrid Benefit applies eligible on-prem licenses to Azure compute.' },
      { q: 'Which service is the cloud SIEM in Azure?', options: ['Defender for Cloud', 'Microsoft Sentinel', 'Azure Monitor', 'Service Health'], answer: 1, explain: 'Microsoft Sentinel is the cloud-native SIEM/SOAR.' },
      { q: 'Which provides recommendations across cost, security, reliability, performance?', options: ['Azure Advisor', 'Service Health', 'Cost Management', 'Resource Health'], answer: 0, explain: 'Azure Advisor synthesizes best-practice recommendations across categories.' },
      { q: 'IaaS customer responsibilities include:', options: ['Datacenter security', 'Hypervisor patching', 'Guest OS patching', 'Physical network'], answer: 2, explain: 'In IaaS the customer patches the guest OS, configures apps, manages data and identity.' },
      { q: 'Which entry conveys correct cost terminology?', options: ['CapEx = cloud, OpEx = on-prem', 'CapEx = up-front purchase, OpEx = pay-as-you-go', 'They mean the same thing', 'OpEx requires depreciation schedules'], answer: 1, explain: 'CapEx = capital expenditure (buy assets up-front). OpEx = operating expenditure (pay over time). Cloud is OpEx.' }
    ]
  },

  // ============================================================
  // PowerShell Mastery — dedicated standalone track
  // ============================================================
  {
    id: 'powershell',
    name: 'PowerShell Mastery',
    short: 'PowerShell',
    code: 'pwsh',
    badge: 'Skill Track',
    type: 'powershell',
    desc: 'From zero to admin scripting. Cmdlets, pipeline, scripting, remoting, automation.',
    lessons: [
      {
        title: '1. PowerShell Fundamentals',
        body: `
          <h2>What is PowerShell?</h2>
          <p>Object-based shell + scripting language from Microsoft. Two builds:</p>
          <ul>
            <li><b>Windows PowerShell 5.1</b> — built into Windows, runs on .NET Framework.</li>
            <li><b>PowerShell 7+ (Core)</b> — cross-platform (Windows, macOS, Linux), runs on .NET. Recommended.</li>
          </ul>
          <h2>Verb-Noun cmdlets</h2>
          <p>Every cmdlet follows <code>Verb-Noun</code>: <code>Get-Process</code>, <code>Set-Location</code>, <code>New-Item</code>, <code>Remove-Item</code>.</p>
          <pre><code>Get-Command -Verb Get        # list all Get-* cmdlets
Get-Help Get-Process -Full   # full help
Get-Help about_*             # conceptual help topics</code></pre>
          <h2>Objects, not text</h2>
          <p>Unlike bash, PowerShell pipes <i>objects</i>. <code>Get-Process | Sort-Object CPU -Descending</code> sorts by a property, not by parsing text.</p>
        `
      },
      {
        title: '2. Variables, Types, Operators',
        body: `
          <pre><code>$name = "Chris"
$age  = 32
$path = "C:\\Users"
$list = 1,2,3,4,5
$hash = @{ Name = "alice"; Role = "admin" }

# Strict type
[int]$num = "42"

# Interpolation
"Hello $name, you are $age"

# Expression in string
"Sum: $($list.Count * 2)"</code></pre>
          <h2>Operators</h2>
          <ul>
            <li>Comparison: <code>-eq -ne -lt -gt -le -ge -like -match -contains</code></li>
            <li>Logic: <code>-and -or -not -xor</code></li>
            <li>Arithmetic: <code>+ - * / %</code></li>
          </ul>
          <p><b>Note:</b> Use <code>-eq</code> NOT <code>==</code>. <code>=</code> is assignment only.</p>
        `
      },
      {
        title: '3. The Pipeline & Common Cmdlets',
        body: `
          <pre><code>Get-Process |
  Where-Object { $_.CPU -gt 100 } |
  Sort-Object CPU -Descending |
  Select-Object -First 5 Name, CPU, Id</code></pre>
          <h2>Workhorse cmdlets</h2>
          <ul>
            <li><b>Where-Object</b> — filter (alias <code>?</code>).</li>
            <li><b>Select-Object</b> — pick properties / first N (alias <code>select</code>).</li>
            <li><b>Sort-Object</b> — order.</li>
            <li><b>Group-Object</b> — count by property.</li>
            <li><b>Measure-Object</b> — sum, avg, max, min, count.</li>
            <li><b>ForEach-Object</b> — iterate (alias <code>%</code>).</li>
            <li><b>Format-Table / Format-List</b> — output only; use at end.</li>
          </ul>
          <p><code>$_</code> is the current pipeline object. In PS 5.1+ you can also use <code>$PSItem</code>.</p>
        `
      },
      {
        title: '4. Flow Control & Functions',
        body: `
          <pre><code>if ($x -gt 10) {
  "big"
} elseif ($x -gt 0) {
  "small"
} else {
  "zero or negative"
}

switch ($status) {
  "OK"      { "good" }
  "Warn"    { "watch it" }
  default   { "unknown" }
}

foreach ($n in 1..5) { "Number $n" }

while ($i -lt 5) { $i++; "loop $i" }

do {
  $reply = Read-Host "y/n"
} while ($reply -notin "y","n")

function Get-Square {
  param([int]$n)
  return $n * $n
}
Get-Square -n 7    # 49

# Advanced function
function Get-Status {
  [CmdletBinding()]
  param(
    [Parameter(Mandatory)][string]$Name,
    [switch]$Verbose
  )
  process {
    Write-Verbose "Checking $Name"
    Get-Service -Name $Name -ErrorAction SilentlyContinue
  }
}</code></pre>
        `
      },
      {
        title: '5. Files, Registry, Providers',
        body: `
          <pre><code># Files / dirs
Get-ChildItem -Path C:\\Logs -Recurse -Filter *.log
New-Item -Path .\\report.txt -ItemType File
Set-Content -Path .\\report.txt -Value "hello"
Add-Content -Path .\\report.txt -Value "line 2"
Get-Content .\\report.txt
Test-Path .\\report.txt
Copy-Item src dst
Move-Item src dst
Remove-Item .\\report.txt -Confirm:$false

# Encoding (avoid UTF-16 BOM surprises in PS 5.1)
Out-File -FilePath data.txt -Encoding utf8

# Registry as a drive
Get-ChildItem HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run
Get-ItemProperty HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*  |
  Select-Object DisplayName, DisplayVersion

# Environment
$env:USERNAME
$env:PATH
$env:NEW_VAR = "value"</code></pre>
          <h2>Providers</h2>
          <p>Drives like <code>HKLM:</code>, <code>Env:</code>, <code>Cert:</code>, <code>WSMan:</code> let you navigate registry, env vars, certs the same way you navigate <code>C:</code>.</p>
        `
      },
      {
        title: '6. Working with Services, Processes, Events',
        body: `
          <pre><code># Services
Get-Service
Get-Service spooler
Start-Service spooler
Stop-Service spooler -Force
Restart-Service spooler
Set-Service -Name spooler -StartupType Automatic

# Processes
Get-Process
Get-Process notepad
Stop-Process -Name notepad -Force
Start-Process notepad
Wait-Process -Id 1234

# Event log
Get-WinEvent -LogName System -MaxEvents 50
Get-WinEvent -FilterHashtable @{
  LogName='Security'
  Id=4625              # failed logon
  StartTime=(Get-Date).AddDays(-1)
}

# Performance counters
Get-Counter '\\Processor(_Total)\\% Processor Time' -SampleInterval 1 -MaxSamples 5</code></pre>
        `
      },
      {
        title: '7. Networking & WMI/CIM',
        body: `
          <pre><code># Network basics
Test-Connection google.com -Count 4
Test-NetConnection www.microsoft.com -Port 443
Resolve-DnsName github.com
Get-NetIPAddress
Get-NetAdapter
Get-NetRoute

# REST API
$resp = Invoke-RestMethod -Uri "https://api.github.com/repos/microsoft/PowerShell"
$resp.full_name
$resp.stargazers_count

# Download
Invoke-WebRequest -Uri "https://example.com/file.zip" -OutFile .\\file.zip

# CIM (replacement for WMI)
Get-CimInstance Win32_OperatingSystem | Select-Object Caption, Version, OSArchitecture
Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3" |
  Select-Object DeviceID, @{n='FreeGB';e={[math]::Round($_.FreeSpace/1GB,2)}}
Get-CimInstance Win32_BIOS | Select-Object Manufacturer, SerialNumber</code></pre>
        `
      },
      {
        title: '8. Active Directory & User Management',
        body: `
          <p>Requires the <code>ActiveDirectory</code> RSAT module.</p>
          <pre><code>Import-Module ActiveDirectory

# Find users
Get-ADUser -Filter * -Properties LastLogonDate |
  Where-Object { $_.LastLogonDate -lt (Get-Date).AddDays(-90) -and $_.Enabled } |
  Select-Object SamAccountName, LastLogonDate

# Create user
New-ADUser \`
  -Name "Jane Doe" \`
  -SamAccountName jdoe \`
  -UserPrincipalName "jdoe@contoso.com" \`
  -AccountPassword (ConvertTo-SecureString "P@ssw0rd!" -AsPlainText -Force) \`
  -Enabled $true \`
  -Path "OU=Users,DC=contoso,DC=com"

# Groups
Add-ADGroupMember -Identity "IT-Admins" -Members jdoe
Get-ADGroupMember "IT-Admins"

# Lock / unlock
Unlock-ADAccount -Identity jdoe
Disable-ADAccount -Identity jdoe</code></pre>
          <h2>Local user management</h2>
          <pre><code>New-LocalUser -Name "tempuser" -NoPassword
Add-LocalGroupMember -Group "Administrators" -Member "tempuser"
Get-LocalUser</code></pre>
        `
      },
      {
        title: '9. Remoting & Sessions',
        body: `
          <h2>Enable PSRemoting</h2>
          <pre><code>Enable-PSRemoting -Force     # on the target, as admin
Set-Item WSMan:\\localhost\\Client\\TrustedHosts -Value "server01"</code></pre>
          <h2>One-off remote command</h2>
          <pre><code>Invoke-Command -ComputerName server01 -ScriptBlock {
  Get-Service spooler
}

# Multi-target, parallel
Invoke-Command -ComputerName (Get-Content servers.txt) -ScriptBlock {
  Get-CimInstance Win32_OperatingSystem | Select PSComputerName, Caption
}</code></pre>
          <h2>Persistent session</h2>
          <pre><code>$s = New-PSSession -ComputerName server01 -Credential (Get-Credential)
Invoke-Command -Session $s -ScriptBlock { Get-Process | Measure-Object }
Enter-PSSession $s    # interactive
Exit-PSSession
Remove-PSSession $s</code></pre>
          <h2>SSH-based PSRemoting</h2>
          <p>PS 7 supports SSH transport for cross-platform: <code>Enter-PSSession -HostName host -UserName me -SSHTransport</code>.</p>
        `
      },
      {
        title: '10. Error Handling, Modules, Scripting Best Practices',
        body: `
          <h2>Error handling</h2>
          <pre><code>try {
  Get-Item .\\missing.txt -ErrorAction Stop
}
catch [System.IO.FileNotFoundException] {
  Write-Warning "File not found"
}
catch {
  Write-Error "Unexpected: $_"
}
finally {
  Write-Verbose "cleanup"
}

# Common parameters
Get-Process -ErrorAction Stop -ErrorVariable err
$ErrorActionPreference = "Stop"     # script-wide</code></pre>
          <h2>Modules</h2>
          <pre><code>Get-Module -ListAvailable
Import-Module Az
Install-Module -Name Microsoft.Graph -Scope CurrentUser
Update-Module Az
Get-InstalledModule</code></pre>
          <h2>Script best practices</h2>
          <ul>
            <li>Use <code>[CmdletBinding()]</code> + <code>param()</code> with types and validation.</li>
            <li>Set <code>$ErrorActionPreference = "Stop"</code> in production scripts.</li>
            <li>Use <code>-WhatIf</code> and <code>-Confirm</code> for destructive cmdlets during testing.</li>
            <li>Sign scripts and set <code>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</code>.</li>
            <li>Use approved verbs (<code>Get-Verb</code>).</li>
            <li>Lint with PSScriptAnalyzer: <code>Invoke-ScriptAnalyzer .\\script.ps1</code>.</li>
            <li>Store secrets in <code>SecretManagement</code> module, never plaintext.</li>
          </ul>
          <h2>Example: audit logon failures</h2>
          <pre><code>[CmdletBinding()]
param([int]$Days = 1)

$start = (Get-Date).AddDays(-$Days)
Get-WinEvent -FilterHashtable @{
  LogName   = 'Security'
  Id        = 4625
  StartTime = $start
} |
ForEach-Object {
  [PSCustomObject]@{
    Time     = $_.TimeCreated
    User     = $_.Properties[5].Value
    Source   = $_.Properties[19].Value
    Workstation = $_.Properties[13].Value
  }
} |
Export-Csv -Path .\\failed-logons.csv -NoTypeInformation
Write-Host "Exported failed logons since $start"</code></pre>
        `
      }
    ],
    quiz: [
      { q: 'Which is the correct PowerShell equality operator?', options: ['==', '-eq', '=', '.equals'], answer: 1, explain: '`-eq` is comparison. `=` is assignment. There is no `==`.' },
      { q: 'How do you get help on a specific cmdlet?', options: ['help Get-Process', 'Get-Help Get-Process', 'man Get-Process', 'All of the above (aliases)'], answer: 3, explain: '`help` and `man` are aliases for Get-Help — all valid in PowerShell.' },
      { q: 'Which cmdlet filters objects in the pipeline?', options: ['Select-Object', 'ForEach-Object', 'Where-Object', 'Sort-Object'], answer: 2, explain: 'Where-Object filters by predicate. Select-Object picks properties.' },
      { q: 'What does $_ represent in a pipeline?', options: ['Underscore variable for math', 'The current pipeline object', 'The last error', 'Script root path'], answer: 1, explain: '$_ (also $PSItem) is the current pipeline object.' },
      { q: 'Which gets the registry Run key (where startup apps live)?', options: ['Get-RegistryKey ...', 'Get-ItemProperty HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run', 'reg query Run', 'Get-StartupItem'], answer: 1, explain: 'PowerShell treats the registry as a drive — use Get-ItemProperty on the HKLM: provider path.' },
      { q: 'You need to run a command on 50 servers in parallel. Which cmdlet?', options: ['Invoke-Expression', 'Invoke-Command -ComputerName', 'Start-Process', 'Enter-PSSession'], answer: 1, explain: 'Invoke-Command with -ComputerName fans out the scriptblock across targets in parallel.' },
      { q: 'Which retrieves OS info on Windows via CIM?', options: ['Get-CimInstance Win32_OperatingSystem', 'Get-Process OS', 'Read-OS', 'Get-WindowsInfo'], answer: 0, explain: 'Get-CimInstance Win32_OperatingSystem is the modern replacement for Get-WmiObject.' },
      { q: 'Best practice for using credentials in scripts is to:', options: ['Hardcode the plaintext password', 'Store passwords in plain XML', 'Use SecretManagement / Get-Credential', 'Email them to yourself'], answer: 2, explain: 'Never embed plaintext. Use Get-Credential interactively or the SecretManagement module.' },
      { q: 'A script that prints "WhatIf" instead of executing destructive actions is using:', options: ['-Confirm', '-Verbose', '-WhatIf', '-Debug'], answer: 2, explain: '-WhatIf simulates the change. -Confirm prompts. Both common with Remove-/Set-/Stop- cmdlets.' },
      { q: 'Which module is required for Get-ADUser?', options: ['Az', 'ActiveDirectory', 'AzureAD', 'NetTCPIP'], answer: 1, explain: 'The ActiveDirectory RSAT module ships the AD cmdlets.' },
      { q: 'What does this output: 1..3 | ForEach-Object { $_ * 2 } ?', options: ['1, 2, 3', '2, 4, 6', '0, 2, 4', 'Error'], answer: 1, explain: '1..3 creates the range 1,2,3. Each multiplied by 2 = 2, 4, 6.' },
      { q: 'Which sets a script to stop on any error?', options: ['$ErrorActionPreference = "Continue"', '$ErrorActionPreference = "Stop"', '$ErrorActionPreference = "Ignore"', 'set-strict on'], answer: 1, explain: 'Setting $ErrorActionPreference to "Stop" makes non-terminating errors terminating script-wide.' },
      { q: 'Pipeline behavior: PowerShell passes ___ between cmdlets.', options: ['Text lines', '.NET objects', 'JSON', 'XML'], answer: 1, explain: 'PowerShell passes typed objects, not strings — that is why you can sort/filter by property names.' },
      { q: 'Which cmdlet creates a persistent remote session?', options: ['Enter-PSSession', 'New-PSSession', 'Invoke-Command', 'Connect-PSSession'], answer: 1, explain: 'New-PSSession creates a reusable session you can pass to Invoke-Command or Enter-PSSession.' },
      { q: 'PSScriptAnalyzer is used to:', options: ['Execute scripts faster', 'Lint scripts for style/security issues', 'Encrypt scripts', 'Convert PS to bash'], answer: 1, explain: 'PSScriptAnalyzer is the static analyzer/linter for PowerShell code.' }
    ]
  }
];

// Expose globally for app.js
window.COURSES = COURSES;
