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
          <p>Laptops pack desktop functions into compact, battery-powered chassis. Field service techs are expected to identify and replace these field-replaceable units (FRUs).</p>

          <h3>Battery (Li-ion / LiPo)</h3>
          <p><b>What:</b> Lithium-Ion or Lithium-Polymer rechargeable cell stack. Acronym <b>Li-ion</b> = Lithium-Ion.</p>
          <p><b>Why:</b> Powers laptop when AC is unplugged. Degrades with charge cycles — a "cycle count" of 300-500 = noticeable capacity loss; 1000+ = near end of life. Swollen batteries are a fire/pressure hazard and MUST be replaced.</p>
          <p><b>How used:</b> Removable on older laptops (slide latch). Modern slim laptops have internal batteries requiring back-cover removal. Check capacity in Windows: <code>powercfg /batteryreport</code>. macOS: System Info → Power.</p>

          <h3>RAM (SO-DIMM)</h3>
          <p><b>What:</b> <b>SO-DIMM</b> = Small Outline Dual Inline Memory Module. Compact RAM stick for laptops/mini-PCs.</p>
          <p><b>Why:</b> Working memory for the OS + apps. Laptop sockets are limited (often 1-2 slots, sometimes soldered).</p>
          <p><b>How used:</b> Match the laptop's exact DDR generation (DDR4 / DDR5), speed (MHz), and capacity. Mismatched modules run at the slowest rating. Modules are physically keyed — DDR4 will NOT fit a DDR5 slot.</p>

          <h3>Storage</h3>
          <p><b>Types:</b></p>
          <ul>
            <li><b>2.5" SATA HDD/SSD</b> — older laptops. SATA = Serial ATA, up to 600 MB/s.</li>
            <li><b>M.2 SATA SSD</b> — gumstick form factor on the SATA bus. Same 600 MB/s ceiling.</li>
            <li><b>M.2 NVMe SSD</b> — gumstick on PCIe bus. <b>NVMe</b> = Non-Volatile Memory Express. PCIe Gen3 ~3.5 GB/s, Gen4 ~7 GB/s, Gen5 ~14 GB/s.</li>
          </ul>
          <p><b>Why NVMe:</b> Bypasses SATA's bottleneck. Critical for fast boot, app launch, large file work.</p>
          <p><b>Watch out:</b> Some M.2 slots are SATA-only, some NVMe-only, some both. Check motherboard manual before buying.</p>

          <h3>Display panel</h3>
          <ul>
            <li><b>LCD</b> = Liquid Crystal Display. Two sub-types:
              <ul>
                <li><b>TN</b> (Twisted Nematic) — fast response, weak viewing angles, cheap.</li>
                <li><b>IPS</b> (In-Plane Switching) — better color + viewing angle, slightly slower.</li>
              </ul>
            </li>
            <li><b>OLED</b> = Organic Light Emitting Diode. Each pixel emits its own light → true blacks, infinite contrast, risk of burn-in.</li>
          </ul>
          <p><b>Backlight:</b> LCDs need backlight to be visible. Older laptops used <b>CCFL</b> (Cold Cathode Fluorescent Lamp) with an <b>inverter</b> to step up voltage. Modern: LED backlight, no inverter. <i>Symptom of bad backlight: image visible only when flashlight is shined on the screen.</i></p>

          <h3>Wireless card / Bluetooth combo</h3>
          <p><b>What:</b> M.2 2230 or 1216 card with Wi-Fi + Bluetooth radios. Antenna leads (u.FL/MHF4) snap onto card and route into the lid.</p>
          <p><b>How used:</b> Replaceable for upgrades (e.g., adding Wi-Fi 6E) or repair. Always reconnect both antenna pigtails (typically MAIN and AUX) — single antenna degrades range and MIMO.</p>

          <h3>Keyboard / touchpad / hinges</h3>
          <p>Connected by ribbon cables (FFC/FPC — Flexible Flat / Printed Cable). Replace ribbons gently; ZIF (Zero-Insertion-Force) sockets must be unlocked before pulling.</p>

          <h2>Mobile device types</h2>
          <ul>
            <li><b>Smartphone</b> — handheld with cellular radio + sensors.</li>
            <li><b>Tablet</b> — larger screen, optional cellular, no/limited phone capability.</li>
            <li><b>Phablet</b> — large smartphone bridging phone/tablet.</li>
            <li><b>Wearable</b> — smartwatch, fitness tracker, smart glasses. Limited storage; companion phone usually required.</li>
            <li><b>E-reader</b> — e-ink display, long battery life.</li>
            <li><b>GPS unit</b> — <b>GPS</b> = Global Positioning System. Dedicated nav device; smartphones largely replaced these.</li>
          </ul>
          <p>Modern phones/tablets use soldered RAM, sealed batteries — almost no user-serviceable parts.</p>

          <h2>Connection types</h2>
          <h3>USB-C / Thunderbolt 4</h3>
          <p><b>What:</b> Reversible 24-pin connector. Supports data (USB 3.2/4), video (DisplayPort Alt Mode), and power (<b>USB-PD</b> = USB Power Delivery, up to 240W on PD 3.1).</p>
          <p><b>Thunderbolt 4</b> over USB-C: 40 Gbps, dual 4K displays, mandatory PD, supports PCIe tunneling (external GPUs).</p>
          <p><b>Why:</b> Single-cable docking. Charge laptop + drive monitors + carry data over one port.</p>

          <h3>Lightning (Apple proprietary)</h3>
          <p><b>What:</b> Apple's pre-2023 phone/tablet connector. 8-pin reversible.</p>
          <p><b>Status:</b> Being phased out — iPhone 15+ uses USB-C (EU mandate).</p>

          <h3>Bluetooth</h3>
          <p><b>What:</b> Short-range (typically 10m) wireless protocol using 2.4 GHz ISM band.</p>
          <p><b>Why:</b> Wireless peripherals — headphones, keyboards, watches. Low power vs. Wi-Fi.</p>
          <p><b>How used:</b> Pairing via PIN or numeric comparison. Bluetooth Low Energy (BLE) variant powers IoT sensors. Versions 5.x add longer range + higher throughput.</p>

          <h3>NFC (Near Field Communication)</h3>
          <p><b>What:</b> Very-short-range (≤4 cm) RFID-based wireless using 13.56 MHz.</p>
          <p><b>Why:</b> Tap-to-pay (Apple Pay, Google Pay, Samsung Pay), transit cards, fast pairing handoff, access badges.</p>

          <h3>Hotspot / Tethering</h3>
          <p><b>What:</b> Phone shares its cellular data connection with another device.</p>
          <p><b>How:</b> Wi-Fi hotspot (phone broadcasts SSID), USB tethering (cable), Bluetooth tethering. Watch for carrier data caps and battery drain.</p>

          <h3>MicroSD / SD card</h3>
          <p><b>SD</b> = Secure Digital. Removable flash storage for cameras, drones, some Android phones. Speed classes (Class 10, U3, V30, V90) indicate sustained write speed for 4K video.</p>
        `
      },
      {
        title: '2. Networking — Cables & Connectors',
        body: `
          <p>Network cabling is the physical layer of any wired LAN. Picking the right cable matters for speed, distance, interference resistance, and cost. Exam will test categories, distances, connectors, and use cases.</p>

          <h2>Copper twisted-pair Ethernet</h2>
          <p><b>What:</b> 4 pairs of insulated copper conductors twisted together. The twist cancels electromagnetic noise (crosstalk). All modern LAN copper is twisted-pair.</p>
          <p><b>UTP</b> = Unshielded Twisted Pair. Cheaper, used for normal office runs.<br>
          <b>STP</b> = Shielded Twisted Pair. Foil or braid around the conductors plus a drain wire. Used in industrial / high-EMI environments (motors, transformers, hospitals).</p>

          <h3>Cat 5e — Category 5 enhanced</h3>
          <p><b>What:</b> Baseline modern Ethernet cable rated for 1 Gbps to 100 meters at 100 MHz.</p>
          <p><b>Why:</b> Cheap, ubiquitous, sufficient for typical desktops. Found pre-installed in older buildings.</p>
          <p><b>How used:</b> Voice + 1 Gbps data drops, patch cords. Cannot carry 10 Gbps reliably.</p>

          <h3>Cat 6 — Category 6</h3>
          <p><b>What:</b> Tighter twist + plastic spline separator. Rated 1 Gbps to 100 m, OR <b>10 Gbps to ~55 m</b>.</p>
          <p><b>Why:</b> Better signal-to-noise + alien crosstalk resistance than Cat 5e.</p>
          <p><b>How used:</b> New residential / small office installs. Avoid for 10 Gbps over long runs.</p>

          <h3>Cat 6a — Augmented Category 6</h3>
          <p><b>What:</b> Even tighter twist + often shielded. Rated <b>10 Gbps to full 100 m</b> at 500 MHz.</p>
          <p><b>Why:</b> Future-proof for 10 GbE backbone, multi-gig Wi-Fi 6/6E AP uplinks.</p>
          <p><b>How used:</b> Enterprise / datacenter horizontal cabling. Thicker + stiffer than Cat 6 — plan conduit + bend radius.</p>

          <h3>Cat 7 / Cat 8</h3>
          <p><b>Cat 7</b>: foiled shielded twisted-pair, never standardized by TIA. Rare in North America.<br>
          <b>Cat 8</b>: 40 Gbps to 30 m at 2 GHz. Datacenter top-of-rack short runs only.</p>

          <h3>Coaxial — RG-6 / RG-59</h3>
          <p><b>What:</b> Center conductor + dielectric + braided shield + jacket. <b>RG</b> = "Radio Guide" mil-spec naming.</p>
          <p><b>Why:</b> Carries broadband RF. RG-6 is thicker, better shielded, lower loss than RG-59.</p>
          <p><b>How used:</b> Cable TV, cable modems (<b>DOCSIS</b> — Data Over Cable Service Interface Specification), security camera RF, satellite.</p>
          <p><b>Connector:</b> <b>F-type</b> screw-on, or BNC (bayonet) for older equipment / lab gear.</p>

          <h2>Fiber-optic cabling</h2>
          <p><b>What:</b> Glass or plastic strand carrying light pulses instead of electrons. Two operational modes:</p>

          <h3>Single-mode fiber (SMF)</h3>
          <p><b>What:</b> Very thin core (~9 µm) carrying ONE light path. Uses laser source at 1310 / 1550 nm.</p>
          <p><b>Why:</b> Lowest dispersion → longest distance. Tens of kilometers per link without repeater.</p>
          <p><b>How used:</b> ISP backbones, building-to-building runs, metro / long-haul transport. Jacket usually <b>yellow</b>.</p>

          <h3>Multimode fiber (MMF)</h3>
          <p><b>What:</b> Larger core (~50 or 62.5 µm) carrying many light modes. Uses LED or VCSEL at 850 nm.</p>
          <p><b>Why:</b> Cheaper transceivers, suitable for shorter runs (typically &lt; 550 m for 1 GbE, less for 10 GbE).</p>
          <p><b>How used:</b> Inside datacenters, between switches, server-to-SAN. Jacket: <b>orange</b> (OM1/OM2), <b>aqua</b> (OM3/OM4), <b>lime/magenta</b> (OM5).</p>

          <h3>Fiber connectors</h3>
          <ul>
            <li><b>LC</b> (Lucent Connector) — small push-pull, duplex. Dominates modern SFP/SFP+ optics.</li>
            <li><b>SC</b> (Subscriber / Square Connector) — square push-pull. Older switches, ISP-side gear.</li>
            <li><b>ST</b> (Straight Tip) — round bayonet twist-lock. Legacy / FDDI.</li>
            <li><b>MTP/MPO</b> — multi-fiber push-on, used for 40/100 Gbps parallel optics.</li>
          </ul>

          <h3>Transceivers — SFP / SFP+ / QSFP</h3>
          <p><b>SFP</b> = Small Form-factor Pluggable. Hot-swappable optic module that fits switch port. Variants: <b>SFP</b> (1 Gbps), <b>SFP+</b> (10 Gbps), <b>SFP28</b> (25 Gbps), <b>QSFP</b>/<b>QSFP+</b>/<b>QSFP28</b> (4×, up to 100 Gbps).</p>
          <p><b>Reach codes</b>: <b>SR</b> Short Reach (multimode), <b>LR</b> Long Reach (single-mode 10 km), <b>ER</b> Extended Reach (40 km), <b>ZR</b> (80 km).</p>
          <p><b>Why:</b> Same chassis port supports copper, multimode, or single-mode by swapping the SFP. Match optic to cable type or no link.</p>

          <h2>Copper connectors</h2>
          <ul>
            <li><b>RJ45</b> — Registered Jack 45. 8-position 8-conductor (8P8C) plug used for Ethernet.</li>
            <li><b>RJ11</b> — 6P2C or 6P4C, analog telephone lines.</li>
            <li><b>RJ48</b> — looks like RJ45 but pinout for T1/E1 WAN circuits.</li>
            <li><b>F-type</b> — screw-on coax for cable/sat. <b>BNC</b> — bayonet coax for lab gear.</li>
          </ul>

          <h2>Ethernet wiring standards — T568A vs T568B</h2>
          <p><b>What:</b> Two standardized pin-to-wire color assignments for RJ45 termination, defined by <b>TIA/EIA-568</b> (Telecommunications Industry Association).</p>
          <p><b>T568B</b> (more common in US installs) pin order: White/Orange, Orange, White/Green, Blue, White/Blue, Green, White/Brown, Brown.<br>
          <b>T568A</b>: swaps the orange and green pairs.</p>
          <p><b>Why it matters:</b></p>
          <ul>
            <li>Same standard on BOTH ends = <b>straight-through</b> cable. Used PC-to-switch, switch-to-router.</li>
            <li>Different standard on each end = <b>crossover</b>. Historically used switch-to-switch. Modern switches use <b>Auto-MDI/MDI-X</b> to automatically handle either cable — crossover is mostly obsolete.</li>
          </ul>
          <p><b>How used:</b> Pick ONE standard for your site (often B) and stick with it. Documenting choice prevents future patch panel chaos.</p>

          <h2>Plenum vs riser vs PVC jackets</h2>
          <ul>
            <li><b>Plenum (CMP)</b> — fire-retardant jacket required by code for air-handling spaces (above drop ceilings). Releases less toxic smoke when burned.</li>
            <li><b>Riser (CMR)</b> — for vertical runs between floors.</li>
            <li><b>PVC / general purpose (CM)</b> — least restrictive, cheapest, indoor only outside plenum.</li>
          </ul>
          <p><b>Why:</b> Building codes (NEC, local AHJ) mandate plenum where applicable. Wrong jacket = failed inspection.</p>

          <h2>Termination tools</h2>
          <ul>
            <li><b>Crimper</b> — attaches RJ45 plug to cable.</li>
            <li><b>Punch-down tool (110 blade)</b> — seats wires into keystone jacks / patch panels (insulation displacement).</li>
            <li><b>Cable tester</b> — confirms pinout + continuity. <b>Certifier</b> measures attenuation, NEXT, return loss against TIA standards.</li>
            <li><b>Tone generator + probe</b> ("fox &amp; hound") — find which jack in a closet matches a wall port.</li>
            <li><b>TDR</b> (Time-Domain Reflectometer) — measures distance to a copper fault.</li>
            <li><b>OTDR</b> (Optical TDR) — same for fiber.</li>
          </ul>
        `
      },
      {
        title: '3. TCP/IP, Ports, Protocols',
        body: `
          <p><b>TCP/IP</b> = Transmission Control Protocol / Internet Protocol. The protocol stack that runs the modern Internet and all corporate networks. Every other protocol on this page rides on top of it.</p>

          <h2>Transport layer — TCP vs UDP</h2>
          <h3>TCP — Transmission Control Protocol</h3>
          <p><b>What:</b> Connection-oriented, reliable, ordered byte stream between two endpoints.</p>
          <p><b>Why:</b> Guarantees delivery (retransmits lost packets), preserves order, and handles flow + congestion control.</p>
          <p><b>How used:</b> Web (HTTP/HTTPS), email (SMTP/IMAP/POP3), SSH, file transfer (FTP/SFTP), database connections — anywhere data corruption or reordering is unacceptable.</p>
          <p><b>3-way handshake</b> opens the connection:</p>
          <ol>
            <li>Client → server: <b>SYN</b> (synchronize, "let's talk")</li>
            <li>Server → client: <b>SYN-ACK</b> (synchronize + acknowledge)</li>
            <li>Client → server: <b>ACK</b> (final acknowledgement)</li>
          </ol>
          <p>Tear-down: 4-way (FIN, ACK, FIN, ACK) or abrupt RST.</p>

          <h3>UDP — User Datagram Protocol</h3>
          <p><b>What:</b> Connectionless. Send a datagram, hope it arrives, no retransmission.</p>
          <p><b>Why:</b> Far lower overhead than TCP. Caller (application) handles loss if it cares.</p>
          <p><b>How used:</b> Real-time traffic where retransmission is worse than loss — VoIP/SIP, video streaming, gaming, DNS queries, NTP, SNMP, DHCP discovery, TFTP.</p>

          <h2>Ports — the address of a service on a host</h2>
          <p><b>What:</b> 16-bit number (0–65535) identifying a specific service on an IP. Combine IP + port = socket.</p>
          <p>Ranges:</p>
          <ul>
            <li><b>0–1023</b> well-known (privileged on Linux, require root to bind).</li>
            <li><b>1024–49151</b> registered with IANA.</li>
            <li><b>49152–65535</b> ephemeral / dynamic — used by clients as source ports.</li>
          </ul>
          <p>IANA = Internet Assigned Numbers Authority.</p>

          <h2>Essential port + protocol cheat sheet</h2>

          <h3>FTP — File Transfer Protocol (20 TCP data, 21 TCP control)</h3>
          <p><b>What:</b> Classic two-channel file transfer protocol. Port 21 carries commands, 20 carries data (active mode).</p>
          <p><b>Why avoid:</b> Plaintext credentials + data — sniffable.</p>
          <p><b>Replace with:</b> <b>SFTP</b> (SSH File Transfer Protocol, port 22) or <b>FTPS</b> (FTP over TLS, ports 21 + 990).</p>

          <h3>SSH — Secure Shell (22 TCP)</h3>
          <p><b>What:</b> Encrypted remote shell + secure tunnel.</p>
          <p><b>Why:</b> Replaces Telnet (which is plaintext). Authenticates with passwords or, better, public-key pairs.</p>
          <p><b>How used:</b> Linux/Unix remote admin, SFTP file transfer, port forwarding, git over SSH.</p>

          <h3>Telnet (23 TCP) — legacy</h3>
          <p><b>What:</b> Plaintext remote shell. Everything visible on the wire.</p>
          <p><b>Why removed:</b> No encryption. Replaced by SSH everywhere; only used now for connecting to legacy network gear consoles or simple TCP port testing (<code>telnet host 80</code>).</p>

          <h3>SMTP — Simple Mail Transfer Protocol (25 TCP, 587 TCP submission, 465 TCP SMTPS)</h3>
          <p><b>What:</b> Server-to-server email transport. Clients submit on 587 (with auth + STARTTLS) or 465 (implicit TLS).</p>
          <p><b>Why:</b> Backbone of email delivery. Port 25 is now blocked by most residential ISPs to limit spam.</p>

          <h3>DNS — Domain Name System (53 UDP + 53 TCP)</h3>
          <p><b>What:</b> Translates human names (<code>www.example.com</code>) to IP addresses.</p>
          <p><b>Why:</b> No DNS = nothing works. Failure looks like total Internet outage.</p>
          <p><b>How used:</b> UDP for normal queries (fast, small). TCP for large responses (DNSSEC, zone transfers). Newer: <b>DoT</b> (DNS over TLS, 853) and <b>DoH</b> (DNS over HTTPS, 443) encrypt queries.</p>
          <p>Record types: <b>A</b> (IPv4), <b>AAAA</b> (IPv6), <b>CNAME</b> (alias), <b>MX</b> (mail server), <b>TXT</b> (SPF/DKIM/DMARC), <b>NS</b> (nameserver), <b>PTR</b> (reverse).</p>

          <h3>DHCP — Dynamic Host Configuration Protocol (67 UDP server, 68 UDP client)</h3>
          <p><b>What:</b> Automatic IP address assignment + gateway + DNS info for hosts.</p>
          <p><b>Why:</b> Manually configuring every laptop, phone, IoT device is impossible at scale.</p>
          <p><b>How used:</b> <b>DORA</b> exchange — Discover (client broadcast) → Offer (server) → Request (client) → Acknowledgement (server). Lease has a duration; renewed at 50% expiry.</p>

          <h3>HTTP / HTTPS (80 TCP / 443 TCP)</h3>
          <p><b>HTTP</b> = HyperText Transfer Protocol. Plaintext web traffic. Now almost entirely replaced.<br>
          <b>HTTPS</b> = HTTP Secure, wrapped in <b>TLS</b> (Transport Layer Security). Encrypts + authenticates server identity via X.509 cert.</p>
          <p><b>Why HTTPS everywhere:</b> Prevents on-path attackers reading or modifying traffic. Required for HSTS, modern browser features, SEO.</p>

          <h3>POP3 / IMAP (110/995 TCP, 143/993 TCP)</h3>
          <p><b>POP3</b> = Post Office Protocol v3 — downloads + deletes mail from server. Single-device model.<br>
          <b>IMAP</b> = Internet Message Access Protocol — keeps mail on server, syncs state across devices. Universal modern default.</p>
          <p>Secure variants: <b>POP3S</b> 995, <b>IMAPS</b> 993 (TLS-wrapped).</p>

          <h3>SNMP — Simple Network Management Protocol (161 UDP query, 162 UDP trap)</h3>
          <p><b>What:</b> Poll/notify protocol used by NMS (Network Management System) tools to read counters + send alerts from switches, routers, servers.</p>
          <p><b>Versions:</b> v1/v2c use plaintext community strings. <b>SNMPv3</b> adds authentication + encryption — use it.</p>

          <h3>LDAP / LDAPS (389 TCP / 636 TCP)</h3>
          <p><b>LDAP</b> = Lightweight Directory Access Protocol. Queries directory services (Active Directory, OpenLDAP) for users, groups, attributes.</p>
          <p><b>LDAPS</b> = LDAP over TLS. Preferred for any auth or sensitive lookup.</p>

          <h3>SMB / CIFS (445 TCP)</h3>
          <p><b>SMB</b> = Server Message Block. <b>CIFS</b> = Common Internet File System (older Microsoft branding of SMB1).</p>
          <p><b>What:</b> Windows file/print sharing, network drives (\\\\server\\share).</p>
          <p><b>Why critical:</b> Heavily targeted by ransomware/worms (EternalBlue → WannaCry). <b>Disable SMBv1</b> and patch.</p>

          <h3>RDP — Remote Desktop Protocol (3389 TCP)</h3>
          <p><b>What:</b> Microsoft remote desktop access to Windows graphical session.</p>
          <p><b>Why:</b> Top admin tool, also top breach vector when exposed to Internet. Always front with VPN or RD Gateway, enforce NLA + MFA.</p>

          <h3>Other useful ports</h3>
          <ul>
            <li><b>69 UDP — TFTP</b> Trivial FTP. Used by network gear for firmware/config push. No auth.</li>
            <li><b>123 UDP — NTP</b> Network Time Protocol.</li>
            <li><b>137-139 UDP/TCP — NetBIOS</b> legacy Windows name + session. Disable on modern networks.</li>
            <li><b>514 UDP — Syslog</b> centralized logging.</li>
            <li><b>1433 TCP — MS SQL Server</b>; <b>1521 TCP — Oracle DB</b>; <b>3306 TCP — MySQL/MariaDB</b>; <b>5432 TCP — PostgreSQL</b>.</li>
            <li><b>5060/5061 — SIP</b> Session Initiation Protocol (VoIP signaling).</li>
            <li><b>8080 / 8443</b> — common alt HTTP/HTTPS dev ports.</li>
          </ul>

          <h2>Connectionless vs connection-oriented examples</h2>
          <table style="width:100%;font-size:14px;border-collapse:collapse">
            <tr><th align="left" style="padding:4px;border-bottom:1px solid #444">Protocol</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Transport</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Why</th></tr>
            <tr><td>HTTPS</td><td>TCP</td><td>Reliable delivery of pages/data</td></tr>
            <tr><td>SSH</td><td>TCP</td><td>Interactive shell needs no loss</td></tr>
            <tr><td>DNS query</td><td>UDP</td><td>Small + speed-critical</td></tr>
            <tr><td>VoIP/SIP/RTP</td><td>UDP</td><td>Lost packet &lt; delayed packet</td></tr>
            <tr><td>SMB / RDP</td><td>TCP</td><td>File / desktop integrity</td></tr>
            <tr><td>SNMP / NTP / DHCP</td><td>UDP</td><td>Lightweight broadcasts/polls</td></tr>
          </table>

          <h2>Exam tips</h2>
          <ul>
            <li>If question says "secure replacement for X", think: Telnet → SSH; FTP → SFTP/FTPS; HTTP → HTTPS; SNMPv1/v2 → SNMPv3; LDAP → LDAPS.</li>
            <li>If you see ports 80 / 443, the question is usually about web traffic + cert handling.</li>
            <li>Port + protocol pairings are pure memorization — flashcards beat re-reading.</li>
          </ul>
        `
      },
      {
        title: '4. Wireless Networking',
        body: `
          <p><b>Wi-Fi</b> = "Wireless Fidelity" (marketing name for IEEE <b>802.11</b> wireless LAN standards). Replaces Ethernet cable with radio waves so devices can move freely. Exam tests standards, frequencies, channel planning, security modes, and antenna concepts.</p>

          <h2>The 802.11 family — Wi-Fi generations</h2>
          <p>Every Wi-Fi version is a different amendment to IEEE 802.11. Marketing renamed them Wi-Fi 4/5/6/7 starting in 2018 for clarity.</p>

          <h3>Wi-Fi 4 (802.11n) — 2009</h3>
          <p><b>What:</b> First Wi-Fi to use <b>MIMO</b> (Multiple Input Multiple Output) — multiple antennas + spatial streams. Runs on either 2.4 GHz or 5 GHz.</p>
          <p><b>Speed:</b> Up to 600 Mbps theoretical with 4 streams + 40 MHz channel.</p>
          <p><b>Why care:</b> Still found everywhere — printers, IoT, budget devices. Slowest device on the AP slows others on the same channel.</p>

          <h3>Wi-Fi 5 (802.11ac) — 2014</h3>
          <p><b>What:</b> 5 GHz-only. Added <b>MU-MIMO</b> (Multi-User MIMO) downstream — AP serves multiple clients simultaneously. Wider channels (80 / 160 MHz). 256-QAM modulation.</p>
          <p><b>Speed:</b> Up to ~3.5 Gbps (Wave 2) per AP.</p>
          <p><b>How used:</b> Mainstream office / home up to ~2020. Still very common.</p>

          <h3>Wi-Fi 6 (802.11ax) — 2019</h3>
          <p><b>What:</b> Both 2.4 + 5 GHz. New <b>OFDMA</b> (Orthogonal Frequency-Division Multiple Access) splits a channel into smaller resource units so one transmission carries data for many clients simultaneously. <b>BSS Coloring</b> tags overlapping APs to reduce contention. <b>TWT</b> (Target Wake Time) lets battery-powered IoT sleep longer.</p>
          <p><b>Why:</b> Performs much better in crowded environments (stadiums, schools, dense apartments).</p>
          <p><b>Speed:</b> Up to ~9.6 Gbps aggregate.</p>

          <h3>Wi-Fi 6E — 2020/21</h3>
          <p><b>What:</b> Same 802.11ax tech but extended into the new <b>6 GHz</b> band — additional spectrum from 5.925 to 7.125 GHz.</p>
          <p><b>Why:</b> 6 GHz is fresh, has many 80/160 MHz channels with no legacy gear. Lower latency, higher throughput.</p>
          <p><b>Watch out:</b> Range is shorter than 5 GHz; walls attenuate more.</p>

          <h3>Wi-Fi 7 (802.11be) — 2024</h3>
          <p><b>What:</b> Adds <b>MLO</b> (Multi-Link Operation) — a client can use 2.4 + 5 + 6 GHz simultaneously. 320 MHz channels (6 GHz only). 4K-QAM modulation.</p>
          <p><b>Speed:</b> Up to ~46 Gbps theoretical.</p>

          <h2>Frequency bands</h2>

          <h3>2.4 GHz</h3>
          <p><b>What:</b> 2.400–2.4835 GHz <b>ISM</b> (Industrial, Scientific, Medical) band — license-free worldwide.</p>
          <p><b>Why use:</b> Longer range, better wall penetration.</p>
          <p><b>Downsides:</b> Crowded — Bluetooth, microwave ovens, baby monitors, cordless phones all share it. Only <b>3 non-overlapping 20 MHz channels: 1, 6, 11</b>.</p>
          <p><b>How used:</b> IoT, old laptops, distant rooms.</p>

          <h3>5 GHz</h3>
          <p><b>What:</b> 5.150–5.825 GHz (varies by country). Mix of <b>UNII-1 / UNII-2 / UNII-2 Extended / UNII-3</b> sub-bands.</p>
          <p><b>Why:</b> Many non-overlapping channels (~24 in 20 MHz, fewer in wider 40/80/160). Less interference.</p>
          <p><b>DFS</b> (Dynamic Frequency Selection): UNII-2 channels are shared with weather/military radar. AP must vacate the channel if radar is detected. Provides more spectrum but possible disruption.</p>
          <p><b>Downsides:</b> Shorter range; weaker through walls.</p>

          <h3>6 GHz (Wi-Fi 6E / 7)</h3>
          <p><b>What:</b> 5.925–7.125 GHz, ~1.2 GHz of additional spectrum. Many fresh channels.</p>
          <p><b>Why:</b> Best throughput + latency. No legacy 802.11a/b/g/n/ac devices to drag it down.</p>

          <h2>Channel width</h2>
          <p>Channels can be bonded for more bandwidth at the cost of fewer non-overlapping options:</p>
          <ul>
            <li><b>20 MHz</b> — most reliable, most channels available. Use in 2.4 GHz always.</li>
            <li><b>40 MHz</b> — double throughput. Common 5 GHz default.</li>
            <li><b>80 MHz</b> — 5 GHz high-perf indoor.</li>
            <li><b>160 MHz</b> — 5 / 6 GHz, high throughput, fewer slots.</li>
            <li><b>320 MHz</b> — Wi-Fi 7 in 6 GHz only.</li>
          </ul>

          <h2>Security modes</h2>

          <h3>WEP — Wired Equivalent Privacy (1999)</h3>
          <p><b>What:</b> Original wireless encryption using RC4 cipher and a static shared key.</p>
          <p><b>Why broken:</b> IV (initialization vector) collisions + key reuse let attackers crack any WEP key in minutes with free tools.</p>
          <p><b>Use today:</b> Never. Even legacy IoT must be replaced.</p>

          <h3>WPA — Wi-Fi Protected Access (2003)</h3>
          <p><b>What:</b> Stopgap upgrade still using RC4 but with per-packet keying via <b>TKIP</b> (Temporal Key Integrity Protocol).</p>
          <p><b>Why deprecated:</b> TKIP weaknesses exposed by 2008. Treat as legacy only.</p>

          <h3>WPA2 — 2004</h3>
          <p><b>What:</b> Mandates <b>AES-CCMP</b> (Counter Mode CBC-MAC Protocol over AES). Two flavors:</p>
          <ul>
            <li><b>WPA2-Personal</b> (PSK = Pre-Shared Key) — single passphrase shared by all users. Home / small office.</li>
            <li><b>WPA2-Enterprise</b> — uses <b>802.1X</b> + <b>RADIUS</b> server. Each user has their own credentials/certificate. Mandatory at workplaces.</li>
          </ul>
          <p><b>Why still around:</b> Universal device support. Current minimum acceptable security.</p>
          <p><b>Weakness:</b> 4-way handshake can be captured + brute-forced offline (KRACK attack mitigated by patches; weak PSKs still vulnerable).</p>

          <h3>WPA3 — 2018</h3>
          <p><b>What:</b> Replaces the WPA2 4-way handshake with <b>SAE</b> (Simultaneous Authentication of Equals, aka Dragonfly). Mandates <b>PMF</b> (Protected Management Frames, 802.11w).</p>
          <p><b>Why:</b> SAE makes offline dictionary attacks infeasible. PMF blocks deauthentication / disassociation injection attacks (used in evil twin setups).</p>
          <p><b>Flavors:</b> WPA3-Personal, WPA3-Enterprise (192-bit suite for government/regulated). <b>Enhanced Open</b> uses <b>OWE</b> (Opportunistic Wireless Encryption) to encrypt guest Wi-Fi without a password.</p>

          <h2>Auth + identity infrastructure (Enterprise)</h2>

          <h3>802.1X — Port-based Network Access Control</h3>
          <p><b>Roles:</b></p>
          <ul>
            <li><b>Supplicant</b> — the client device.</li>
            <li><b>Authenticator</b> — the AP or switch.</li>
            <li><b>Authentication Server</b> — RADIUS server.</li>
          </ul>
          <p><b>Why:</b> Per-user / per-device credentials. Disable an account → that user can no longer get on Wi-Fi. Standard for office Wi-Fi + wired NAC.</p>

          <h3>RADIUS — Remote Authentication Dial-In User Service</h3>
          <p><b>What:</b> Central AAA (Authentication, Authorization, Accounting) protocol. Microsoft NPS (Network Policy Server) or FreeRADIUS are common implementations.</p>
          <p><b>How used:</b> AP forwards user EAP exchange to RADIUS, which checks credentials against AD/LDAP. Server returns Access-Accept or Access-Reject.</p>

          <h3>EAP — Extensible Authentication Protocol methods</h3>
          <ul>
            <li><b>EAP-TLS</b> — both client AND server have certs. Strongest. Requires PKI.</li>
            <li><b>EAP-PEAP / PEAP-MSCHAPv2</b> — server cert only, password tunneled inside TLS. Common in AD environments.</li>
            <li><b>EAP-TTLS</b> — like PEAP, supports more inner auth types.</li>
            <li><b>EAP-FAST</b> — Cisco-developed, PAC file replaces server cert.</li>
            <li><b>EAP-MD5</b> — weak, avoid.</li>
          </ul>

          <h2>Antennas + RF concepts</h2>
          <ul>
            <li><b>Omnidirectional</b> — radiates 360° horizontally (donut). Default for indoor APs.</li>
            <li><b>Directional / Yagi / Panel</b> — focused beam for point-to-point or coverage of one area.</li>
            <li><b>Parabolic dish</b> — very high gain for long-distance links (building-to-building).</li>
            <li><b>dBi</b> — antenna gain relative to isotropic. Higher dBi = narrower but stronger.</li>
            <li><b>RSSI</b> (Received Signal Strength Indicator) — usually shown as a negative dBm. -50 great, -70 marginal, -80 poor, -90 unusable.</li>
            <li><b>SNR</b> (Signal-to-Noise Ratio) — signal level above noise floor. 25+ dB SNR good, &lt; 15 dB struggles.</li>
          </ul>

          <h2>Common wireless attacks (and defenses)</h2>
          <ul>
            <li><b>Evil twin</b> — attacker AP impersonates legit SSID. Defense: WPA2/3-Enterprise (server cert verification), MDM-pushed Wi-Fi profile.</li>
            <li><b>Deauth attack</b> — forged 802.11 management frame disconnects clients. Defense: <b>PMF (802.11w)</b>, mandatory in WPA3.</li>
            <li><b>WPS brute force</b> — Wi-Fi Protected Setup PIN attack (Reaver). Defense: disable WPS on routers.</li>
            <li><b>Rogue AP</b> — unauthorized AP plugged into corporate LAN. Defense: wireless intrusion prevention (<b>WIPS</b>), 802.1X on wired ports.</li>
            <li><b>Jamming / DoS</b> — RF interference. Defense: spectrum analyzer, locate source, report to regulator.</li>
          </ul>

          <h2>Site survey + placement</h2>
          <p>Before deploying multi-AP Wi-Fi, perform a site survey:</p>
          <ul>
            <li><b>Predictive</b> — software (Ekahau, AirMagnet) models building floor plan + materials.</li>
            <li><b>Passive</b> — walk with laptop logging signal from existing APs.</li>
            <li><b>Active</b> — associate to APs and test throughput.</li>
          </ul>
          <p>Goal: -65 dBm signal everywhere with SNR &gt; 20. Avoid sticky-client and rogue overlap. Use channel reuse (1, 6, 11 in 2.4 GHz) and non-overlapping channels in 5 GHz.</p>

          <h2>Captive portal</h2>
          <p><b>What:</b> First HTTP request from a new client is intercepted and redirected to a login / acceptance page (hotel Wi-Fi, conference).</p>
          <p><b>How:</b> DNS or HTTP hijack at the gateway until client is authenticated. Often combined with vouchers, social login, or RADIUS.</p>

          <h2>Exam tips</h2>
          <ul>
            <li>If question says "use strongest current encryption" → WPA3 (or WPA2 if WPA3 not offered).</li>
            <li>2.4 GHz non-overlapping channels = 1, 6, 11. Always.</li>
            <li>Evil twin defense = Enterprise mode + server cert validation.</li>
            <li>WPA2-PSK vs Enterprise: PSK = home, Enterprise = office with RADIUS.</li>
          </ul>
        `
      },
      {
        title: '5. Internet Connection Types',
        body: `
          <p>Last-mile technologies that link a home/business to an <b>ISP</b> (Internet Service Provider). Exam tests typical speeds, distance limits, latency, and where each fits.</p>

          <h2>DSL — Digital Subscriber Line</h2>
          <p><b>What:</b> Broadband over existing copper telephone wires using high-frequency carriers (above voice band).</p>
          <p><b>Why:</b> Reuses installed phone infrastructure — wide reach in older neighborhoods.</p>
          <p><b>How used:</b> A DSL modem at the customer site terminates the loop to the telco <b>DSLAM</b> (Digital Subscriber Line Access Multiplexer) at the central office.</p>
          <p><b>Flavors:</b></p>
          <ul>
            <li><b>ADSL</b> (Asymmetric DSL) — much faster down than up. Typical ~10/1 to 50/5 Mbps. Distance-limited (~18,000 ft from CO).</li>
            <li><b>VDSL</b> (Very-high-bit-rate DSL) — up to 100 Mbps, shorter range.</li>
            <li><b>SDSL</b> (Symmetric DSL) — equal up/down, business focus.</li>
          </ul>
          <p><b>Downsides:</b> Slow uplink, distance-sensitive, being phased out where fiber arrives.</p>

          <h2>Cable broadband (DOCSIS)</h2>
          <p><b>What:</b> Internet over the same coaxial / hybrid fiber-coax (<b>HFC</b>) plant as cable TV.</p>
          <p><b>Standard:</b> <b>DOCSIS</b> (Data Over Cable Service Interface Specification). Latest <b>DOCSIS 3.1</b> supports up to ~10 Gbps down / 1-2 Gbps up; <b>DOCSIS 4.0</b> targets symmetric multi-gig.</p>
          <p><b>Why:</b> Widely deployed in suburbs. Faster than DSL in most markets.</p>
          <p><b>How used:</b> Cable modem at home → coax → node → ISP core. Bandwidth is <b>shared</b> with neighbors on the same segment — peak-time slowdown is the classic complaint.</p>

          <h2>Fiber to the X (FTTx)</h2>
          <p><b>FTTH</b> = Fiber To The Home. <b>FTTP</b> = To The Premises. <b>FTTC</b> = To The Curb (then copper). <b>FTTB</b> = To The Building.</p>
          <p><b>What:</b> Optical fiber runs all (or most) of the way to the customer.</p>
          <p><b>Why best-in-class:</b> Symmetric multi-gigabit speeds, low latency, no copper attenuation, future-proof.</p>
          <p><b>Common access tech:</b></p>
          <ul>
            <li><b>GPON</b> (Gigabit Passive Optical Network) — splits one fiber among multiple subscribers via passive optical splitters. ~2.5 Gbps down / 1.25 Gbps up shared.</li>
            <li><b>XGS-PON</b> — 10 Gbps symmetric PON, replacing GPON.</li>
            <li><b>Active Ethernet</b> — dedicated fiber + active switch per customer (enterprise).</li>
          </ul>
          <p><b>How delivered:</b> ISP installs an <b>ONT</b> (Optical Network Terminal) at the home — converts fiber light to Ethernet.</p>

          <h2>Satellite</h2>
          <p><b>What:</b> Internet relayed via satellites orbiting Earth.</p>
          <p><b>Two architectures:</b></p>
          <ul>
            <li><b>GEO</b> (Geostationary Earth Orbit) — ~36,000 km up. Examples: HughesNet, Viasat. Round-trip latency ~600 ms.</li>
            <li><b>LEO</b> (Low Earth Orbit) — ~550 km up. Constellations like Starlink, OneWeb, Project Kuiper. Round-trip ~25-50 ms — comparable to terrestrial.</li>
          </ul>
          <p><b>Why:</b> The only option in many rural / maritime / aviation scenarios. LEO finally usable for video calls and gaming.</p>
          <p><b>Downsides:</b> Affected by heavy rain / snow (rain fade), required clear sky view, monthly cost.</p>

          <h2>Cellular wireless</h2>
          <p><b>What:</b> Internet over carrier mobile networks via SIM-equipped device (phone, hotspot, modem).</p>
          <ul>
            <li><b>3G</b> — legacy, mostly retired in US. Includes HSPA+.</li>
            <li><b>4G LTE</b> (Long-Term Evolution) — typical 10-100 Mbps down. Still dominant.</li>
            <li><b>5G</b> — sub-6 GHz mid-band offers wide coverage at 100-900 Mbps. <b>mmWave</b> (24+ GHz) delivers multi-gigabit but only a few hundred meters per cell.</li>
            <li><b>FWA</b> (Fixed Wireless Access) — 5G-based "home internet" service (T-Mobile Home Internet, Verizon 5G Home).</li>
          </ul>
          <p><b>How used:</b> Phone hotspot, mobile USB modem, embedded LTE in laptop. Watch monthly data caps and throttling thresholds.</p>

          <h2>WISP — Wireless ISP (fixed wireless)</h2>
          <p><b>What:</b> ISP delivers Internet via licensed/unlicensed point-to-point or point-to-multipoint microwave or Wi-Fi-like radios.</p>
          <p><b>How used:</b> Subscriber antenna aims at WISP tower a few miles away. Common in rural communities. Speeds 10-300 Mbps typically.</p>
          <p><b>Downsides:</b> Line-of-sight needed; weather affects signal.</p>

          <h2>Legacy / niche connections</h2>
          <ul>
            <li><b>Dial-up</b> — analog modem over POTS (Plain Old Telephone Service). Up to 56 Kbps. Essentially extinct.</li>
            <li><b>ISDN</b> (Integrated Services Digital Network) — 128 Kbps digital phone line. Retired but exam may mention BRI / PRI.</li>
            <li><b>T1 / T3</b> (DS1 / DS3) — leased copper digital lines. T1 = 1.544 Mbps, T3 = 44.7 Mbps. Now replaced by Ethernet over fiber.</li>
            <li><b>Metro Ethernet</b> — carrier Ethernet over fiber for businesses, scaling from 10 Mbps to 100 Gbps.</li>
          </ul>

          <h2>Network types — by scope</h2>
          <ul>
            <li><b>PAN</b> (Personal Area Network) — Bluetooth, USB cable distance (a few meters). Phone + earbuds.</li>
            <li><b>LAN</b> (Local Area Network) — single building / floor. Ethernet + Wi-Fi.</li>
            <li><b>WLAN</b> (Wireless LAN) — the Wi-Fi portion of a LAN.</li>
            <li><b>CAN</b> (Campus Area Network) — multiple buildings on one campus (university, corporate park).</li>
            <li><b>MAN</b> (Metropolitan Area Network) — city-wide. Often carrier metro Ethernet.</li>
            <li><b>WAN</b> (Wide Area Network) — across cities/countries. The Internet is the largest WAN.</li>
            <li><b>SAN</b> (Storage Area Network) — dedicated high-speed network for block storage (Fibre Channel, iSCSI).</li>
          </ul>

          <h2>Connection comparison summary</h2>
          <table style="width:100%;font-size:13px;border-collapse:collapse">
            <tr><th align="left" style="padding:4px;border-bottom:1px solid #444">Type</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Typical down/up</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Latency</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Best fit</th></tr>
            <tr><td>DSL</td><td>10–100 / 1–10 Mbps</td><td>20–40 ms</td><td>Phone-line areas</td></tr>
            <tr><td>Cable</td><td>100M–1G / 10–50M</td><td>15–30 ms</td><td>Suburban home/SMB</td></tr>
            <tr><td>FTTH</td><td>500M–10G symmetric</td><td>5–15 ms</td><td>Future-proof everywhere</td></tr>
            <tr><td>GEO sat</td><td>25–100 / 3 Mbps</td><td>~600 ms</td><td>Truly remote</td></tr>
            <tr><td>LEO sat</td><td>100–250 / 10–25 Mbps</td><td>25–50 ms</td><td>Rural broadband</td></tr>
            <tr><td>5G FWA</td><td>100M–1G / 10–100M</td><td>15–40 ms</td><td>Suburban + urban home</td></tr>
            <tr><td>WISP</td><td>10–300 Mbps</td><td>10–40 ms</td><td>Rural line-of-sight</td></tr>
          </table>

          <h2>Exam tips</h2>
          <ul>
            <li>"Most rural with low latency" → LEO satellite (Starlink).</li>
            <li>"Fastest residential, symmetric" → FTTH / FTTP.</li>
            <li>"DOCSIS" automatically means cable broadband.</li>
            <li>"Asymmetric" wording typically points to DSL or cable.</li>
            <li>SAN vs LAN: SAN moves block storage between servers and storage arrays — NOT generic file traffic.</li>
          </ul>
        `
      },
      {
        title: '6. Network Hardware',
        body: `
          <p>Every network is built from a small set of devices, each operating at a specific OSI layer. Exam expects you to identify, configure, and troubleshoot each one.</p>

          <h2>Router — OSI Layer 3</h2>
          <p><b>What:</b> Network device that forwards packets between different IP networks (subnets) based on a routing table.</p>
          <p><b>Why:</b> Without a router, hosts can only talk inside their own broadcast domain. Every traversal of a subnet boundary requires routing.</p>
          <p><b>How used:</b> The default gateway on every PC is a router interface. Enterprise routers run protocols like <b>OSPF</b> (Open Shortest Path First), <b>EIGRP</b> (Enhanced Interior Gateway Routing Protocol), or <b>BGP</b> (Border Gateway Protocol) to share routes dynamically. SOHO routers usually combine router + switch + AP + firewall + DHCP server in one box.</p>
          <p><b>NAT</b> (Network Address Translation) and <b>PAT</b> (Port Address Translation, aka NAT overload) commonly live on the WAN-facing router to share a single public IP among many private hosts.</p>

          <h2>Switch — OSI Layer 2</h2>
          <p><b>What:</b> Forwards Ethernet frames between ports based on destination <b>MAC</b> (Media Access Control) address. Learns which MAC sits on which port.</p>
          <p><b>Why:</b> Replaces hubs — only the intended port receives the frame (vs. flooding everywhere). Full duplex on every port.</p>
          <p><b>Types:</b></p>
          <ul>
            <li><b>Unmanaged</b> — plug and go. No configuration. Small environments.</li>
            <li><b>Managed</b> — supports VLANs, STP, QoS, port mirroring, SNMP. Enterprise standard.</li>
            <li><b>Layer 3 switch</b> — managed switch that ALSO performs routing between configured VLAN <b>SVIs</b> (Switch Virtual Interfaces). Faster than router-on-a-stick for inter-VLAN traffic.</li>
          </ul>
          <p><b>Key concepts:</b></p>
          <ul>
            <li><b>VLAN</b> (Virtual LAN, 802.1Q) — logical L2 segmentation; multiple broadcast domains on one switch.</li>
            <li><b>Trunk port</b> — carries multiple tagged VLANs between switches.</li>
            <li><b>Access port</b> — single untagged VLAN, faces end hosts.</li>
            <li><b>STP</b> (Spanning Tree Protocol, 802.1D) / <b>RSTP</b> (Rapid STP, 802.1w) / <b>MSTP</b> (Multiple STP) — blocks redundant paths to prevent L2 loops.</li>
            <li><b>LACP</b> (Link Aggregation Control Protocol, 802.3ad) — bundles multiple physical links into one logical EtherChannel for bandwidth + failover.</li>
          </ul>

          <h2>Hub — OSI Layer 1 (legacy)</h2>
          <p><b>What:</b> Dumb electrical repeater. Frame in one port → broadcast out all other ports. Half-duplex shared collision domain.</p>
          <p><b>Why obsolete:</b> Every device sees every frame (privacy + bandwidth waste). Collisions degrade as users grow.</p>
          <p><b>Today:</b> Found only in legacy environments or as a packet-capture / lab tool.</p>

          <h2>Wireless Access Point — WAP / AP</h2>
          <p><b>What:</b> Bridges wireless clients (Wi-Fi) to the wired Ethernet LAN. Operates at L2.</p>
          <p><b>How used:</b> Independent <b>fat / autonomous APs</b> each configured by hand. <b>Thin / lightweight APs</b> rely on a central <b>WLC</b> (Wireless LAN Controller) — Cisco, Aruba, Meraki, etc. Controllers push SSID config, do roaming, run rogue-AP detection.</p>
          <p><b>BSS / BSSID / ESSID:</b></p>
          <ul>
            <li><b>BSS</b> (Basic Service Set) — coverage area of one AP radio.</li>
            <li><b>BSSID</b> — the AP radio's MAC address (identifies the BSS).</li>
            <li><b>SSID / ESSID</b> (Service Set Identifier / Extended) — human-readable network name. Same SSID on many APs = one extended network.</li>
          </ul>

          <h2>Firewall</h2>
          <p><b>What:</b> Filters traffic at one or more layers per rule set (5-tuple, app, identity).</p>
          <p><b>Types:</b></p>
          <ul>
            <li><b>Packet filter (stateless)</b> — matches headers only. Old, fast, dumb.</li>
            <li><b>Stateful firewall</b> — tracks connection state, automatically permits return traffic for established flows.</li>
            <li><b>NGFW</b> (Next-Generation Firewall) — adds application awareness (Layer 7), <b>IPS</b> (Intrusion Prevention System), TLS inspection, user-identity-based rules, threat intel feeds. Palo Alto, Fortinet, Cisco Firepower.</li>
            <li><b>UTM</b> (Unified Threat Management) — single appliance bundling firewall + antivirus + content filter + VPN + IDS. Common in SMB.</li>
            <li><b>Host-based firewall</b> — Windows Defender Firewall, iptables, nftables on the endpoint itself.</li>
            <li><b>WAF</b> (Web Application Firewall) — Layer 7 firewall specifically protecting HTTP/S apps from OWASP-class attacks (SQLi, XSS).</li>
          </ul>
          <p><b>How used:</b> Network firewalls sit at zone boundaries (Internet ↔ DMZ ↔ internal). Rules go top-down, first match wins, implicit deny at end.</p>

          <h2>DMZ — Demilitarized Zone (a.k.a. Screened Subnet)</h2>
          <p><b>What:</b> Network segment between the Internet and the trusted internal LAN, hosting public-facing services (web servers, mail relay).</p>
          <p><b>Why:</b> A compromise of a public service doesn't directly expose internal LAN — extra firewall hop required.</p>

          <h2>Patch panel + structured cabling</h2>
          <p><b>What:</b> Wall-mounted or rack-mounted block where horizontal cable runs (from wall jacks) terminate on the back via punch-down, and short patch cords on the front connect to switch ports.</p>
          <p><b>Why:</b> Permanent runs aren't repeatedly bent or stressed; changes happen in soft patch cords. Standard 568A/B termination.</p>

          <h2>PoE — Power over Ethernet</h2>
          <p><b>What:</b> Standard for delivering DC power over the same Ethernet cable as data. Eliminates AC outlets near devices.</p>
          <p><b>Standards:</b></p>
          <ul>
            <li><b>802.3af (PoE / Type 1)</b> — up to 15.4 W from switch port.</li>
            <li><b>802.3at (PoE+ / Type 2)</b> — up to 30 W.</li>
            <li><b>802.3bt (PoE++ / Type 3 & 4)</b> — 60 W (Type 3) and 100 W (Type 4).</li>
          </ul>
          <p><b>How used:</b> IP phones, wireless APs, IP cameras, badge readers, small switches. Either:</p>
          <ul>
            <li><b>PoE switch</b> — every port can deliver power, centrally managed.</li>
            <li><b>PoE injector</b> — single inline unit adds power to one cable between a non-PoE switch and a PoE device.</li>
            <li><b>PoE splitter</b> — separates the power and data at the device end if device only has a barrel jack + Ethernet.</li>
          </ul>

          <h2>Modem (modulator-demodulator)</h2>
          <p><b>What:</b> Converts the ISP's last-mile signal (DSL, cable RF, fiber light) into Ethernet that the LAN can use.</p>
          <p><b>Why:</b> Required at every Internet drop. SOHO ISP "gateway" devices combine modem + router + Wi-Fi.</p>

          <h2>Load balancer</h2>
          <p><b>What:</b> Distributes incoming requests across multiple backend servers. L4 (TCP/UDP, e.g., AWS NLB) or L7 (HTTP-aware, e.g., NGINX, AWS ALB, HAProxy, F5 BIG-IP).</p>
          <p><b>Why:</b> Horizontal scaling + high availability + health-check-based failover.</p>
          <p><b>Algorithms:</b> Round-robin, least connections, source-IP hash, weighted, latency-based.</p>

          <h2>Proxy</h2>
          <ul>
            <li><b>Forward proxy</b> — sits between clients and the Internet; controls + caches outbound traffic. Squid is the classic.</li>
            <li><b>Reverse proxy</b> — sits in front of backend servers; clients connect to the proxy. Adds TLS termination, caching, security headers. NGINX, Caddy, Cloudflare.</li>
          </ul>

          <h2>SDN — Software-Defined Networking</h2>
          <p><b>What:</b> Architecture that separates the network <b>control plane</b> (decisions) from the <b>data plane</b> (forwarding hardware). A central controller programs flow rules into switches via standards like <b>OpenFlow</b>.</p>
          <p><b>Why:</b> Lets one team push network policy declaratively across a whole fabric. Used by hyperscalers + modern enterprise (Cisco ACI, VMware NSX, Arista CloudVision).</p>
          <p><b>SD-WAN</b> applies the same idea to wide-area links — overlay tunnels across broadband / LTE / MPLS with central policy + app-aware steering.</p>

          <h2>NAS vs SAN</h2>
          <ul>
            <li><b>NAS</b> (Network Attached Storage) — file-level access over standard LAN. Protocols: <b>NFS</b> (Network File System, Unix), <b>SMB/CIFS</b> (Windows). Appliances: Synology, QNAP, NetApp.</li>
            <li><b>SAN</b> (Storage Area Network) — block-level access over dedicated high-speed network. Protocols: <b>FC</b> (Fibre Channel) at 8/16/32 Gbps, <b>iSCSI</b> (SCSI over TCP/IP), <b>NVMe-oF</b> (NVMe over Fabrics).</li>
          </ul>

          <h2>IDS / IPS</h2>
          <p><b>IDS</b> (Intrusion Detection System) — passive; detects + alerts on suspicious patterns. Out-of-path.<br>
          <b>IPS</b> (Intrusion Prevention System) — inline; can drop the matching packet. Implemented inside modern NGFW or as standalone (Snort, Suricata).</p>

          <h2>Other components you'll see</h2>
          <ul>
            <li><b>VoIP gateway</b> — converts traditional PSTN lines to SIP/VoIP for the LAN.</li>
            <li><b>Cable certifier</b> — measures attenuation, NEXT, return loss vs TIA-568 standards.</li>
            <li><b>Network tap</b> — passive copy of all traffic on a link for monitoring or packet capture.</li>
            <li><b>NIDS / HIDS</b> — Network / Host based IDS, depending on placement.</li>
            <li><b>Bastion host / jump box</b> — hardened admin entry point into a private network.</li>
          </ul>

          <h2>Exam tips</h2>
          <ul>
            <li>Layer + device pairings: hub L1, switch L2, router L3, firewall L3/4 (NGFW up to L7).</li>
            <li>If a question mentions "central management" of wireless → WLC / lightweight APs.</li>
            <li>"Power for IP phones / APs over the network cable" → PoE / PoE+ / PoE++ depending on wattage.</li>
            <li>"Public services without exposing the LAN" → DMZ / screened subnet.</li>
            <li>NAS = files, SAN = blocks. Different use cases.</li>
          </ul>
        `
      },
      {
        title: '7. RAM Types',
        body: `
          <p><b>RAM</b> = Random Access Memory. Volatile working memory — content vanishes when power is removed. Every program running, including the OS kernel, lives in RAM. Insufficient RAM forces paging to disk, causing severe slowdowns.</p>

          <h2>DRAM vs SRAM</h2>
          <p><b>DRAM</b> (Dynamic RAM) — stores each bit as a charge in a tiny capacitor. Must be refreshed thousands of times per second. Dense, cheap. Used for main system memory.<br>
          <b>SRAM</b> (Static RAM) — stores bits in flip-flops. No refresh needed. Faster, more expensive, lower density. Used for CPU L1/L2/L3 cache.</p>
          <p>When the exam says "RAM" without qualification it means DRAM.</p>

          <h2>SDRAM — Synchronous DRAM</h2>
          <p>RAM that runs in sync with the system bus clock. All modern DRAM is SDRAM. <b>DDR</b> (Double Data Rate) variants transfer data on BOTH rising and falling clock edges → effective speed = 2× clock.</p>

          <h2>DDR generations</h2>
          <p>Each DDR generation roughly doubles the previous bandwidth, drops voltage (less heat / power), and uses incompatible physical keying so you can't put DDR4 in a DDR5 slot. Always match the motherboard's supported generation EXACTLY.</p>

          <h3>DDR3</h3>
          <ul>
            <li><b>Pins:</b> 240 desktop DIMM, 204 laptop SO-DIMM.</li>
            <li><b>Voltage:</b> 1.5 V standard, 1.35 V for DDR3L (low voltage).</li>
            <li><b>Speeds:</b> ~PC3-8500 (1066 MT/s) through PC3-17000 (2133 MT/s).</li>
            <li><b>Used in:</b> Pre-2015 systems.</li>
          </ul>

          <h3>DDR4</h3>
          <ul>
            <li><b>Pins:</b> 288 desktop DIMM, 260 laptop SO-DIMM.</li>
            <li><b>Voltage:</b> 1.2 V (1.05 V LP).</li>
            <li><b>Speeds:</b> PC4-17000 (2133 MT/s) through PC4-25600 (3200 MT/s) JEDEC; <b>XMP</b> (Extreme Memory Profile) presets push to 4800+ MT/s.</li>
            <li><b>Used in:</b> 2015 → ~2022. Still the mainstream baseline today.</li>
          </ul>

          <h3>DDR5</h3>
          <ul>
            <li><b>Pins:</b> 288 desktop DIMM (different keying than DDR4), 262 laptop SO-DIMM.</li>
            <li><b>Voltage:</b> 1.1 V. On-module <b>PMIC</b> (Power Management IC) handles regulation instead of the motherboard.</li>
            <li><b>Speeds:</b> 4800 MT/s baseline; consumer modules now hit 6400-8000+ MT/s.</li>
            <li><b>Other changes:</b> On-die ECC (catches in-cell errors but is not full system ECC). Dual independent 32-bit subchannels per DIMM. Larger capacities (up to 128 GB modules).</li>
            <li><b>Used in:</b> Intel 12th gen+, AMD AM5, modern laptops.</li>
          </ul>

          <h2>Form factors</h2>
          <ul>
            <li><b>DIMM</b> (Dual Inline Memory Module) — full-size, ~133 mm long. Desktops, servers, workstations.</li>
            <li><b>SO-DIMM</b> (Small Outline DIMM) — ~67 mm long. Laptops, mini-PCs, NAS appliances, some all-in-ones.</li>
            <li><b>CAMM2</b> (Compression Attached Memory Module) — emerging laptop module designed by Dell + JEDEC. Lower-profile alternative to SO-DIMM for thin laptops.</li>
            <li>Soldered LPDDR — found in ultraportables. Cannot upgrade. <b>LPDDR</b> (Low-Power DDR) variants (LPDDR4X, LPDDR5, LPDDR5X) sip power but are non-replaceable.</li>
          </ul>

          <h2>ECC vs non-ECC</h2>
          <p><b>ECC</b> (Error-Correcting Code) RAM has an extra DRAM chip used to store parity. Can detect and correct single-bit errors and detect multi-bit errors.</p>
          <p><b>Why:</b> Required wherever silent corruption is unacceptable: servers, finance, scientific, virtualization. Cosmic ray bit flips are real and rare but compound at scale.</p>
          <p><b>How:</b> Both the CPU + motherboard must support ECC. Most consumer Intel chips do NOT enable ECC except specific Xeon / W-series and certain AMD Ryzen / EPYC platforms. DDR5 has "on-die ECC" inside chips — not the same as full ECC end-to-end.</p>

          <h2>Buffered / Registered / Load-Reduced</h2>
          <ul>
            <li><b>UDIMM</b> (Unbuffered DIMM) — standard desktop/laptop modules. Direct signals to memory controller.</li>
            <li><b>RDIMM</b> (Registered DIMM) — has a register chip between the controller and DRAM chips. Reduces electrical load → supports more DIMMs per channel. Used in servers.</li>
            <li><b>LRDIMM</b> (Load-Reduced DIMM) — adds a memory buffer; allows even more / denser DIMMs. High-end servers.</li>
            <li>Server RAM is almost always RDIMM/LRDIMM + ECC.</li>
          </ul>

          <h2>Channels — single / dual / quad</h2>
          <p><b>Memory channel</b> = an independent path between CPU memory controller and a set of DIMM slots.</p>
          <ul>
            <li><b>Single channel</b> — one DIMM populated. Bandwidth = module rate.</li>
            <li><b>Dual channel</b> — populate matched pair in correct slots (often A1+B1 or A2+B2 — check manual). Roughly doubles effective bandwidth.</li>
            <li><b>Quad channel</b> — high-end / workstation / server CPUs (Threadripper, Xeon W). Multiplies bandwidth proportionally.</li>
          </ul>
          <p><b>How to use:</b> Always buy matched kits (same speed, capacity, timings) and install in the slots designated by the motherboard manual for dual/quad-channel operation.</p>

          <h2>Speed ratings, timings, XMP/EXPO</h2>
          <ul>
            <li><b>MT/s</b> (Mega-Transfers per second) — DDR speed. e.g., DDR4-3200 transfers 3200 million times per second per pin.</li>
            <li><b>MHz</b> is half of MT/s (because DDR does 2 transfers per clock).</li>
            <li><b>CL / CAS Latency</b> — number of clocks the module takes to respond. Lower is better but only matters relative to clock speed.</li>
            <li><b>XMP</b> (Intel Extreme Memory Profile) and <b>EXPO</b> (AMD EXPanded profile for Overclocking) — preset overclock profiles stored in the module's SPD. Enable in BIOS to run at advertised high speed (modules default to slower JEDEC speeds otherwise).</li>
          </ul>

          <h2>SPD — Serial Presence Detect</h2>
          <p><b>What:</b> Small EEPROM chip on every DIMM holding capacity, speed, timing, and XMP/EXPO profiles. Read by BIOS at boot so the platform configures itself.</p>

          <h2>Common troubleshooting symptoms</h2>
          <ul>
            <li><b>No POST + beep codes</b> — bad / missing / unseated RAM. Try one stick at a time in slot A2 typically.</li>
            <li><b>Random BSOD</b> (Windows) or kernel panic (Linux/macOS) — RAM errors. Run <b>MemTest86</b> overnight.</li>
            <li><b>WHEA_UNCORRECTABLE_ERROR</b> on Windows — hardware fault, often RAM/CPU/PSU.</li>
            <li><b>Mixed speeds</b> running at slowest module → expected, not a fault. Match for best results.</li>
            <li><b>Mismatched DDR generations</b> — physically incompatible. Will not seat.</li>
          </ul>

          <h2>Compatibility checklist</h2>
          <ol>
            <li>DDR generation matches motherboard (DDR4 vs DDR5 — physically keyed).</li>
            <li>Form factor matches socket (DIMM vs SO-DIMM).</li>
            <li>Speed at or below max supported (faster sticks run at supported speed).</li>
            <li>Voltage / profile supported (XMP for Intel, EXPO for AMD).</li>
            <li>ECC support: needs CPU + chipset that enable ECC.</li>
            <li>Buffered (RDIMM/LRDIMM) vs Unbuffered — must match platform requirements.</li>
            <li>Check motherboard QVL (Qualified Vendor List) for tested kits, especially at high speeds.</li>
          </ol>

          <h2>Exam tips</h2>
          <ul>
            <li>"Server RAM with error detection + correction" → ECC.</li>
            <li>"Compact laptop memory" → SO-DIMM.</li>
            <li>Mixing kits → runs at slowest module's rated speed.</li>
            <li>DDR generations are NOT cross-compatible — different keying.</li>
            <li>Dual-channel needs matched modules in correct slot pairs.</li>
          </ul>
        `
      },
      {
        title: '8. Storage Devices',
        body: `
          <p>Storage = persistent (non-volatile) memory. Survives power-off. Every system needs at least one drive holding the OS, apps, and data. Exam expects identification of drive types, form factors, interfaces, and RAID levels.</p>

          <h2>HDD — Hard Disk Drive</h2>
          <p><b>What:</b> Mechanical drive. Spinning magnetic platters + moving read/write heads.</p>
          <p><b>RPM</b> (Revolutions Per Minute) classes:</p>
          <ul>
            <li><b>5400 RPM</b> — laptops, low-power, archival.</li>
            <li><b>7200 RPM</b> — desktop standard.</li>
            <li><b>10K / 15K RPM</b> — enterprise SAS drives (now mostly displaced by SSDs).</li>
          </ul>
          <p><b>Why still used:</b> Highest capacity per dollar (multi-TB drives are still cheaper than equivalent SSDs). Good for bulk storage, backups, NAS.</p>
          <p><b>Downsides:</b> Mechanical = slow random I/O (~100-200 IOPS), fragile, audible, high power. Failures often preceded by clicking sounds and SMART warnings.</p>
          <p><b>HDD recording techniques:</b></p>
          <ul>
            <li><b>CMR</b> (Conventional Magnetic Recording) — tracks side-by-side, write any sector at full speed.</li>
            <li><b>SMR</b> (Shingled Magnetic Recording) — overlapping tracks, more capacity but slow random writes. Check spec sheet — SMR in a RAID is a disaster.</li>
            <li><b>HAMR / MAMR</b> — Heat- / Microwave-Assisted Magnetic Recording, used for newest 20+ TB drives.</li>
          </ul>

          <h2>SSD — Solid-State Drive</h2>
          <p><b>What:</b> Flash memory, no moving parts. Controller talks to <b>NAND</b> flash chips storing data as electric charge in floating-gate transistors.</p>
          <p><b>Why:</b> Silent, low power, durable, dramatically faster than HDD. Random I/O is 100-1000× HDD.</p>
          <p><b>Flash types (cell density):</b></p>
          <ul>
            <li><b>SLC</b> (Single-Level Cell) — 1 bit/cell. Fastest, longest endurance, most expensive. Enterprise-only.</li>
            <li><b>MLC</b> (Multi-Level Cell) — 2 bits/cell.</li>
            <li><b>TLC</b> (Triple-Level Cell) — 3 bits/cell. Mainstream consumer.</li>
            <li><b>QLC</b> (Quad-Level Cell) — 4 bits/cell. Cheapest, lowest endurance, slower sustained writes. Used for read-heavy bulk SSDs.</li>
            <li><b>3D / V-NAND</b> — stacks cells vertically for density. Now standard regardless of bit-count.</li>
          </ul>
          <p><b>Wear leveling + TRIM:</b> Controller spreads writes across cells (wear leveling) and the OS sends <b>TRIM</b> commands so the drive knows which blocks are free for garbage collection — keeps performance high over time.</p>

          <h2>Drive interfaces (where the drive plugs in)</h2>

          <h3>SATA — Serial ATA</h3>
          <p><b>Acronym:</b> Serial Advanced Technology Attachment.</p>
          <p><b>What:</b> Mainstream consumer drive interface for ~20 years.</p>
          <p><b>Cap:</b> SATA III = 6 Gbps, ~600 MB/s effective.</p>
          <p><b>How used:</b> 7-pin data cable + 15-pin power cable for 2.5" or 3.5" drives. M.2 slots can also operate in SATA mode.</p>

          <h3>SAS — Serial Attached SCSI</h3>
          <p><b>Acronym:</b> Serial Attached Small Computer System Interface.</p>
          <p><b>What:</b> Server / enterprise drive interface. Higher reliability, dual-port for failover.</p>
          <p><b>Cap:</b> 12 Gbps and 24 Gbps SAS-4. Backward-compatible with SATA drives in a SAS backplane.</p>

          <h3>NVMe — Non-Volatile Memory Express</h3>
          <p><b>What:</b> Protocol designed for flash, running directly over <b>PCIe</b> (Peripheral Component Interconnect Express) — bypasses SATA bottleneck.</p>
          <p><b>Speed by PCIe generation (typical x4 lanes):</b></p>
          <ul>
            <li>PCIe Gen3 NVMe → ~3.5 GB/s</li>
            <li>PCIe Gen4 NVMe → ~7 GB/s</li>
            <li>PCIe Gen5 NVMe → ~14 GB/s</li>
          </ul>
          <p><b>Why:</b> Massive IOPS (1M+) and low latency vs SATA. Default for modern OS drive.</p>
          <p><b>NVMe-oF</b> (NVMe over Fabrics) extends the protocol across networks (TCP, RoCE, Fibre Channel) for enterprise storage.</p>

          <h3>USB / Thunderbolt / eSATA external interfaces</h3>
          <ul>
            <li>USB 3.x, USB4 — external drive enclosures, thumb drives.</li>
            <li>Thunderbolt 3/4/5 — high-speed external NVMe enclosures, 40+ Gbps.</li>
            <li>eSATA — legacy external SATA. Largely replaced by USB-C.</li>
          </ul>

          <h2>Drive form factors</h2>
          <ul>
            <li><b>3.5"</b> — desktop / server HDDs.</li>
            <li><b>2.5"</b> — laptop HDDs and SATA SSDs.</li>
            <li><b>M.2</b> — gumstick PCB. Common keys/lengths: M.2 2280 (22 mm wide × 80 mm long). Slot can be SATA-only, NVMe-only, or both — check motherboard manual.</li>
            <li><b>U.2 / U.3</b> — enterprise 2.5"-shaped NVMe drives connected via SFF-8639 connector.</li>
            <li><b>E1.S / E1.L / EDSFF</b> — datacenter ruler form factors for hyperscale NVMe.</li>
            <li><b>mSATA</b> — older small SSD form, replaced by M.2.</li>
          </ul>

          <h2>Partitioning + filesystems</h2>
          <p><b>Partition tables:</b></p>
          <ul>
            <li><b>MBR</b> (Master Boot Record) — legacy. Max 4 primary partitions, max 2 TB disk.</li>
            <li><b>GPT</b> (GUID Partition Table) — modern UEFI standard. Effectively unlimited partitions, supports disks &gt; 2 TB.</li>
          </ul>
          <p><b>Common filesystems:</b></p>
          <ul>
            <li><b>NTFS</b> (New Technology File System) — Windows default. Permissions, journaling, encryption (EFS).</li>
            <li><b>exFAT</b> — cross-platform USB/SD, no journaling, ideal for large removable media.</li>
            <li><b>FAT32</b> — universal but max 4 GB file size, 2 TB partition.</li>
            <li><b>ext4</b> — Linux default.</li>
            <li><b>XFS</b> — high-performance Linux fs, default on RHEL.</li>
            <li><b>APFS</b> (Apple File System) — modern macOS / iOS.</li>
            <li><b>HFS+</b> — older macOS.</li>
            <li><b>ReFS</b> (Resilient File System) — Windows Server, integrity streams.</li>
            <li><b>ZFS / Btrfs</b> — copy-on-write filesystems with snapshots, native RAID, checksums.</li>
          </ul>

          <h2>RAID — Redundant Array of Independent Disks</h2>
          <p><b>What:</b> Combines multiple drives into one logical volume for performance, redundancy, or both. Hardware RAID = dedicated controller. Software RAID = OS-managed (mdadm on Linux, Storage Spaces on Windows, ZFS on TrueNAS).</p>

          <h3>RAID 0 — Stripe</h3>
          <p>2+ drives. Data is striped across all members. <b>Performance:</b> 2× single-drive speed. <b>Redundancy:</b> NONE — losing any drive destroys the array. Use only for scratch / throwaway workloads.</p>

          <h3>RAID 1 — Mirror</h3>
          <p>2 drives. Identical copy on each. <b>Redundancy:</b> tolerates one drive failure. <b>Capacity:</b> 50% (one drive's worth). Used for OS boot drives in servers.</p>

          <h3>RAID 5 — Stripe with distributed parity</h3>
          <p>3+ drives. Parity rotates across all drives. <b>Tolerates 1 drive failure.</b> Capacity = (N-1) × drive size. Slow rebuilds and risk of double-failure during rebuild make it less popular on huge drives. Decent for read-heavy.</p>

          <h3>RAID 6 — Double parity</h3>
          <p>4+ drives. Tolerates <b>2</b> simultaneous failures via dual parity. Slower writes than RAID 5 but safer for large multi-TB arrays.</p>

          <h3>RAID 10 (1+0) — Mirror of stripes</h3>
          <p>4+ drives (even number). Pairs of mirrors, striped together. <b>Fast + redundant.</b> Tolerates 1 failure per mirror pair. Capacity = 50%. Used for high-IOPS workloads — databases.</p>

          <h3>RAID 50 / 60</h3>
          <p>Striped sets of RAID 5 / 6 arrays. Performance + larger capacity. Enterprise/SAN.</p>

          <h3>JBOD / Spanning</h3>
          <p><b>JBOD</b> = Just a Bunch Of Disks. Each drive presented independently OR concatenated into one volume (spanned). No redundancy.</p>

          <h2>Hot spare</h2>
          <p>An idle drive in the array. On failure of any member, controller automatically rebuilds onto the spare — no human intervention. Common in production storage.</p>

          <h2>SMART monitoring</h2>
          <p><b>SMART</b> (Self-Monitoring, Analysis, and Reporting Technology) — drives expose health attributes (reallocated sectors, pending sectors, power-on hours, total bytes written). Tools: <b>CrystalDiskInfo</b>, <b>smartctl</b> (smartmontools).</p>
          <p><b>Action:</b> If reallocated/pending sectors rise → back up + replace immediately.</p>

          <h2>Encryption</h2>
          <ul>
            <li><b>BitLocker</b> (Windows Pro/Enterprise) — full-disk encryption, typically TPM-backed.</li>
            <li><b>BitLocker To Go</b> — removable media.</li>
            <li><b>FileVault 2</b> (macOS).</li>
            <li><b>LUKS</b> (Linux Unified Key Setup) — Linux FDE standard.</li>
            <li><b>SED</b> (Self-Encrypting Drive) — hardware-level AES inside the drive controller. ATA password unlocks.</li>
          </ul>

          <h2>Drive disposal</h2>
          <p>NIST SP 800-88 guidelines:</p>
          <ul>
            <li><b>Clear</b> — overwrite all sectors (HDDs) or built-in secure erase (SSDs).</li>
            <li><b>Purge</b> — cryptographic erase (delete key on SED), degauss HDDs (NOT effective on SSDs).</li>
            <li><b>Destroy</b> — physical shred, incinerate, drill. Required for high-classification data.</li>
          </ul>

          <h2>Exam tips</h2>
          <ul>
            <li>Lose any disk in RAID 0 = lose ALL data.</li>
            <li>Minimum disks: RAID 0 = 2, RAID 1 = 2, RAID 5 = 3, RAID 6 = 4, RAID 10 = 4.</li>
            <li>"Fastest interface" → NVMe over PCIe.</li>
            <li>2 TB+ boot drive → must be GPT.</li>
            <li>Degaussing wipes magnetic media (HDD) — does NOT wipe SSDs. Use crypto-erase or shred for SSD.</li>
            <li>Clicking sound on HDD = imminent failure. Back up NOW.</li>
          </ul>
        `
      },
      {
        title: '9. Motherboards, CPUs, Cooling',
        body: `
          <p>The motherboard is the central PCB that ties together CPU, RAM, storage, expansion cards, and power. The CPU is the brain; cooling keeps it within thermal limits. Exam tests form factors, socket types, chipset roles, firmware features, and cooling methods.</p>

          <h2>Motherboard form factors</h2>
          <p>Standardized board dimensions that dictate case + power compatibility.</p>
          <ul>
            <li><b>ATX</b> (Advanced Technology eXtended) — 12 × 9.6 in (305 × 244 mm). Most expansion slots + RAM slots. Standard for desktops.</li>
            <li><b>microATX (mATX)</b> — 9.6 × 9.6 in. Up to 4 PCIe slots. Mid-size builds + budget systems.</li>
            <li><b>Mini-ITX</b> — 6.7 × 6.7 in. One PCIe slot, two RAM slots. SFF (Small Form Factor) builds, HTPCs, mini servers.</li>
            <li><b>EATX</b> (Extended ATX) — 12 × 13 in. Workstation / server. More VRM phases, more RAM slots.</li>
            <li><b>SSI EEB / CEB</b> — server-specific form factors for dual-socket boards.</li>
          </ul>
          <p><b>Mount</b>: every form factor uses standardized standoff positions. Cases label "supports ATX / mATX / mITX".</p>

          <h2>CPU — Central Processing Unit</h2>
          <p><b>What:</b> Silicon die that executes instructions. Modern CPUs have multiple cores + threads, integrated memory controller, integrated GPU (some), and a stack of caches (L1, L2, L3).</p>
          <p><b>Key specs:</b></p>
          <ul>
            <li><b>Cores / threads</b> — physical cores + simultaneous multithreading (Intel <b>HT</b> = Hyper-Threading, AMD <b>SMT</b> = Simultaneous Multi-Threading).</li>
            <li><b>Base / boost clock</b> — GHz at idle vs under load (Turbo Boost / Precision Boost).</li>
            <li><b>Cache</b> — fast SRAM near the cores. L1 per-core, L2 per-core, L3 shared.</li>
            <li><b>TDP</b> (Thermal Design Power) — heat output the cooler must dissipate. e.g., 65 W desktop, 125-170 W enthusiast, 15-45 W laptop.</li>
            <li><b>Process node</b> — fabrication size (5 nm, 3 nm). Smaller = more efficient.</li>
            <li><b>ISA</b> (Instruction Set Architecture) — x86-64 (Intel/AMD), ARM (Apple Silicon, mobile, server).</li>
          </ul>

          <h2>CPU sockets</h2>
          <p>Physical mechanism connecting CPU to motherboard. Mismatched socket = won't fit / won't post.</p>
          <ul>
            <li><b>LGA</b> (Land Grid Array) — pins are on the MOTHERBOARD; CPU has flat contact pads. Intel desktop standard (LGA 1700, LGA 1851), AMD's AM5 + Threadripper sTRX4/sTR5.</li>
            <li><b>PGA</b> (Pin Grid Array) — pins are on the CPU; board has receptacles. Older AMD (AM4 and back). Bent pin = bricked CPU.</li>
            <li><b>BGA</b> (Ball Grid Array) — CPU soldered directly to board. Laptops, NUCs, phones — non-replaceable.</li>
          </ul>
          <p><b>Tips:</b> Lift the LGA load lever, lower the CPU using its triangle marker to align with the socket. Never force. Keep socket pins protected — even one bent pin can kill the board.</p>

          <h2>Chipset</h2>
          <p><b>What:</b> Silicon companion to the CPU that provides I/O the CPU doesn't handle natively (SATA, USB, extra PCIe lanes, audio, networking).</p>
          <p><b>Old design:</b> Two chips — <b>Northbridge</b> (CPU↔RAM↔GPU) + <b>Southbridge</b> (I/O).<br>
          <b>Modern:</b> Memory controller + GPU lanes moved INTO the CPU die. A single chipset chip, called the <b>PCH</b> (Platform Controller Hub) on Intel or just "chipset" on AMD, handles slow I/O.</p>
          <p><b>Why it matters:</b> Chipset tier (e.g., Intel H, B, Z; AMD A, B, X) determines available features — overclocking, PCIe lanes, USB count, RAID support.</p>

          <h2>Expansion slots</h2>
          <p><b>PCIe</b> (Peripheral Component Interconnect Express) is the universal modern expansion bus. Lane widths: x1, x4, x8, x16. Generations doubling bandwidth: Gen3 → Gen4 → Gen5 → Gen6.</p>
          <ul>
            <li>x16 slot — GPU.</li>
            <li>x4 slot — NVMe / capture cards / NICs.</li>
            <li>x1 — sound cards, low-bandwidth NICs.</li>
          </ul>
          <p>Legacy: PCI, AGP, ISA, AMR — almost never seen now.</p>

          <h2>Motherboard headers + connectors</h2>
          <ul>
            <li><b>24-pin ATX</b> — main board power.</li>
            <li><b>8-pin (or 4+4) EPS</b> — CPU power.</li>
            <li><b>PCIe 6+2 / 12VHPWR / 12V-2x6</b> — GPU power.</li>
            <li><b>SATA</b> — drives, 7-pin data.</li>
            <li><b>USB headers</b> — case front USB.</li>
            <li><b>Front-panel header</b> — power switch, reset, power LED, HDD LED, speaker.</li>
            <li><b>Fan headers</b> — 4-pin PWM or 3-pin DC. <b>CPU_FAN</b> usually mandatory; mobo halts on missing fan.</li>
            <li><b>RGB / ARGB</b> headers — 12V or 5V addressable lighting.</li>
          </ul>

          <h2>BIOS / UEFI firmware</h2>
          <p><b>BIOS</b> (Basic Input/Output System) — legacy firmware initialized hardware + handed off to bootloader. Limited to 16-bit real mode + MBR + 2 TB disks.</p>
          <p><b>UEFI</b> (Unified Extensible Firmware Interface) — modern replacement. Advantages:</p>
          <ul>
            <li>Boots from GPT disks &gt; 2 TB.</li>
            <li>Mouse + GUI setup screens.</li>
            <li><b>Secure Boot</b> — firmware verifies signature of bootloader before allowing execution. Prevents bootkit malware.</li>
            <li>Fast boot, networking stack (PXE).</li>
            <li>EFI System Partition (ESP) on the disk holds bootloaders.</li>
          </ul>
          <p><b>Key UEFI settings exam may quiz:</b></p>
          <ul>
            <li><b>Boot order</b> — which device to attempt first.</li>
            <li><b>Virtualization</b> — Intel <b>VT-x</b> + Intel <b>VT-d</b> (IOMMU); AMD <b>SVM</b> + <b>AMD-Vi</b>. Required for Hyper-V, WSL2, VMware, etc.</li>
            <li><b>TPM</b> (Trusted Platform Module) — must be enabled for Windows 11, BitLocker. Sometimes called <b>fTPM</b> (firmware TPM, AMD) or Intel <b>PTT</b> (Platform Trust Technology).</li>
            <li><b>XMP / EXPO</b> — enable to run RAM at advertised high speed.</li>
            <li><b>CSM</b> (Compatibility Support Module) — legacy BIOS emulation for old OSes. Disable on modern Windows installs.</li>
            <li><b>Resizable BAR / Smart Access Memory</b> — lets CPU access full GPU VRAM at once. Modest gaming gains.</li>
          </ul>
          <p><b>CMOS battery</b> (CR2032 coin cell) backs up settings + RTC when AC removed. Dead battery → BIOS clock wrong, settings revert each boot.</p>

          <h2>Cooling</h2>

          <h3>Air cooling</h3>
          <p><b>Components:</b> Heatsink (often with heat pipes) + fan(s). Direct die contact via thermal interface material.</p>
          <p><b>Thermal paste / TIM</b> (Thermal Interface Material) — fills microscopic gaps between IHS (Integrated Heat Spreader) and heatsink base. Non-conductive paste is safest. Pea-sized drop, mount cooler, let pressure spread.</p>
          <p><b>How used:</b> Cheap, reliable, no leak risk. Limits practical TDP to ~250 W on the best towers.</p>

          <h3>Liquid cooling</h3>
          <ul>
            <li><b>AIO</b> (All-In-One) — sealed pump+block+tubes+radiator with fans. No maintenance.</li>
            <li><b>Custom loop</b> — separate reservoir, pump, blocks, radiators, fittings. Highest performance, maintenance required.</li>
          </ul>
          <p><b>Why:</b> Handles 300+ W CPUs / high-end workstations / overclocking. Quieter for same heat than air.</p>

          <h3>Passive cooling</h3>
          <p>Heatsink only — no fan. Used for low-TDP SoC builds, fanless mini-PCs.</p>

          <h3>Case airflow basics</h3>
          <p>Front/bottom = intake, rear/top = exhaust. Aim for slight positive pressure (more intake CFM than exhaust) to reduce dust ingress through unfiltered openings.</p>

          <h2>Common motherboard / CPU troubleshooting</h2>
          <ul>
            <li><b>No POST + no beeps + no display</b> — check PSU 24-pin + 8-pin EPS seated; speaker / debug LED reveals what's missing (CPU, RAM, GPU, BOOT).</li>
            <li><b>POST code "RAM" lit</b> — reseat memory, test single stick in correct slot, try MemTest86.</li>
            <li><b>Bios date wrong after every boot</b> — replace CMOS battery.</li>
            <li><b>Random shutdowns under load</b> — thermal throttle / shutdown. Reseat cooler, repaste, check fan curve.</li>
            <li><b>Boot loops after update</b> — clear CMOS (jumper or remove battery); revert UEFI to defaults.</li>
          </ul>

          <h2>Exam tips</h2>
          <ul>
            <li>"Smallest mainstream form factor" → Mini-ITX.</li>
            <li>"Pins on the motherboard, pads on CPU" → LGA.</li>
            <li>"Required for Windows 11 secure boot" → TPM 2.0 + UEFI + Secure Boot.</li>
            <li>"Enables virtualization features for Hyper-V" → VT-x / AMD-V.</li>
            <li>"BIOS settings revert every boot" → dead CMOS battery.</li>
            <li>"AIO" implies liquid cooling.</li>
          </ul>
        `
      },
      {
        title: '10. Power Supplies',
        body: `
          <p><b>PSU</b> = Power Supply Unit. Converts wall AC (110/120 V in North America, 220-240 V in EU) into the regulated DC rails (+3.3 V, +5 V, +12 V) that the motherboard, drives, and accessories need. Bad / undersized PSU = mystery crashes, dead components, fire.</p>

          <h2>Form factors</h2>
          <ul>
            <li><b>ATX12V</b> — standard desktop PSU. ~150 × 86 × 140 mm. Fits any ATX case.</li>
            <li><b>SFX / SFX-L</b> — Small Form Factor for Mini-ITX builds. SFX-L slightly taller for quieter 120 mm fan.</li>
            <li><b>TFX</b> — Thin Form Factor, slim cases.</li>
            <li><b>Flex ATX</b> — very small 1U server / NUC chassis.</li>
            <li><b>Server / redundant PSUs</b> — hot-swap, dual redundant (1+1) for high availability.</li>
          </ul>
          <p>Confirm case PSU bay matches form factor before buying.</p>

          <h2>Wattage</h2>
          <p><b>What:</b> Total continuous DC output the PSU is rated for, expressed in watts. Modern PSUs are rated at peak ambient temperature; quality matters more than headline number.</p>
          <p><b>How to size:</b></p>
          <ul>
            <li>Sum component max draw: CPU TDP + GPU TBP (Total Board Power) + drives + fans + a margin for transients.</li>
            <li>Aim to run at 50-70% of PSU rated wattage at typical full load — efficiency is best in that band, and headroom helps transient spikes (modern GPUs spike 2× their TDP for milliseconds).</li>
            <li>Vendor power calculators (Seasonic, Cooler Master) give realistic estimates.</li>
          </ul>
          <p><b>Typical budgets:</b> Office PC: 350-500 W. Gaming with mid-range GPU: 650-750 W. High-end (RTX 4080/4090, 13900K/7950X3D): 850-1200 W.</p>

          <h2>Efficiency — 80 PLUS ratings</h2>
          <p><b>80 PLUS</b> = certification that a PSU is at least 80% efficient at 20%, 50%, and 100% load (115 V internal vs 230 V EU variants). Higher tiers = less wasted heat + lower electric bill.</p>
          <table style="width:100%;font-size:13px;border-collapse:collapse">
            <tr><th align="left" style="padding:4px;border-bottom:1px solid #444">Tier</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Efficiency at 50% load (115 V)</th></tr>
            <tr><td>80 PLUS</td><td>≥ 80%</td></tr>
            <tr><td>Bronze</td><td>≥ 85%</td></tr>
            <tr><td>Silver</td><td>≥ 88%</td></tr>
            <tr><td>Gold</td><td>≥ 90%</td></tr>
            <tr><td>Platinum</td><td>≥ 92%</td></tr>
            <tr><td>Titanium</td><td>≥ 94%</td></tr>
          </table>
          <p>Gold is the sweet spot for most builds. Titanium is luxury / 24×7 servers.</p>

          <h2>Power rails</h2>
          <p>Voltages delivered through the cables:</p>
          <ul>
            <li><b>+12 V</b> — does almost all the work (CPU, GPU, drives, fans).</li>
            <li><b>+5 V</b> — USB ports, some logic.</li>
            <li><b>+3.3 V</b> — DDR memory, chipset.</li>
            <li><b>−12 V</b> — legacy serial port support, almost unused now.</li>
            <li><b>+5 VSB</b> (Standby) — always-on rail powering Wake-on-LAN, RTC, soft power button.</li>
          </ul>
          <p><b>Single-rail vs multi-rail:</b> Single-rail PSU presents one big +12 V pool; multi-rail splits into virtual rails with separate OCP (Over Current Protection) limits. Modern PSUs trend single-rail.</p>

          <h2>Connectors — what plugs where</h2>
          <ul>
            <li><b>24-pin ATX</b> — main motherboard power. Splits into 20+4 for old boards.</li>
            <li><b>8-pin EPS / 4+4-pin</b> — CPU power. High-end boards have two (8+8).</li>
            <li><b>PCIe 6+2 (8-pin)</b> — traditional GPU power. Provides 150 W each.</li>
            <li><b>12VHPWR / 12V-2x6</b> — single 16-pin connector (12 power + 4 sense pins) delivering up to 600 W. Used by RTX 40-series. Seat fully — partial seating causes melting.</li>
            <li><b>SATA power</b> — 15-pin L-shaped, for 2.5"/3.5" drives.</li>
            <li><b>Molex (4-pin)</b> — legacy peripheral connector. Some accessories (fan hubs, pumps) still use it.</li>
            <li><b>Berg (floppy)</b> — extinct.</li>
          </ul>

          <h2>Modularity</h2>
          <ul>
            <li><b>Non-modular</b> — every cable is permanently attached. Cheapest, messiest builds.</li>
            <li><b>Semi-modular</b> — required cables (24-pin, CPU 8-pin) attached; SATA / PCIe / Molex detachable. Best value.</li>
            <li><b>Fully modular</b> — every cable detachable. Cleanest builds, custom cable kits available. Highest cost.</li>
          </ul>
          <p>WARNING: PSU-side connectors are NOT standardized between brands. Never reuse a modular cable from a different PSU — can short or fry components.</p>

          <h2>Protections — read the datasheet</h2>
          <p>Quality PSUs include:</p>
          <ul>
            <li><b>OVP</b> (Over Voltage Protection) — shuts off if rail goes too high.</li>
            <li><b>UVP</b> (Under Voltage Protection) — shuts off if rail sags.</li>
            <li><b>OCP</b> (Over Current Protection) — per-rail current cap.</li>
            <li><b>OPP</b> (Over Power Protection) — total wattage cap.</li>
            <li><b>OTP</b> (Over Temperature Protection) — shuts down if internal temp too high.</li>
            <li><b>SCP</b> (Short Circuit Protection) — disconnects on short.</li>
            <li><b>SIP</b> (Surge / Inrush Protection).</li>
          </ul>
          <p>A "cheap PSU" missing several of these is a leading cause of damaged motherboards / drives.</p>

          <h2>AC side considerations</h2>
          <ul>
            <li><b>Voltage selector</b> — some older PSUs have 115/230 V switch. Modern <b>active PFC</b> (Power Factor Correction) PSUs auto-range.</li>
            <li><b>PFC</b> — active PFC is required by EU regulations and improves efficiency.</li>
            <li><b>UPS</b> (Uninterruptible Power Supply) — battery backup, conditions power, allows graceful shutdown during outages.</li>
            <li><b>Surge protector</b> — shunts voltage spikes (lightning). Measured in joules; "Class I/II/III" defines lightning protection level.</li>
            <li><b>Line conditioner</b> — corrects sags and minor over-voltage.</li>
            <li><b>Generator</b> — extended outage backup. Watch for "dirty" power — line conditioner / online UPS may be needed.</li>
          </ul>

          <h2>Common PSU troubleshooting</h2>
          <ul>
            <li><b>No power at all</b> — outlet, surge strip, AC cord, rear switch, 24-pin seating. Try paperclip / PSU tester to short PS_ON to ground; if PSU fan spins, motherboard is suspect.</li>
            <li><b>Random shutdown under load</b> — OPP / OCP tripping. Wattage may be undersized, or PSU aging. Replace with higher-quality / wattage unit.</li>
            <li><b>Coil whine</b> — high-pitched noise from inductors under specific loads. Often harmless; replace if persistent.</li>
            <li><b>Burning smell</b> — power off, unplug, replace. Could be PSU or motherboard. Inspect carefully before reusing parts.</li>
            <li><b>UPS battery beeping</b> — battery dying; replace UPS battery, not whole unit.</li>
          </ul>

          <h2>Server / redundant power</h2>
          <p><b>Hot-swap PSUs</b> in servers allow one unit to fail or be replaced without downtime. <b>1+1 redundancy</b> means two PSUs, either sufficient alone. Connect them to separate <b>PDU</b> (Power Distribution Unit) feeds for true redundancy. Datacenters provide <b>A and B feeds</b> from independent UPS + generator branches.</p>

          <h2>Battery backup specifications</h2>
          <ul>
            <li><b>VA</b> (Volt-Amps) — apparent power, the headline number on UPS specs.</li>
            <li><b>W</b> (Watts) — real power. <b>Always size by watts</b> needed.</li>
            <li><b>Power factor</b> (W ÷ VA) — modern active-PFC PSUs have near unity PF; older units ~0.6.</li>
            <li><b>Topology:</b> Standby (battery only on outage), Line-Interactive (regulates voltage too), Online / Double-Conversion (constant inverter, cleanest power).</li>
          </ul>

          <h2>Exam tips</h2>
          <ul>
            <li>"Most cables removable for cleanest build" → fully modular.</li>
            <li>"Lower electric cost + less heat" → higher 80 PLUS tier (Gold+).</li>
            <li>"Survives short outages" → UPS (battery), not just a surge protector.</li>
            <li>"600W single connector for high-end GPU" → 12VHPWR / 12V-2x6.</li>
            <li>"Two PSUs in one server for HA" → redundant / hot-swap.</li>
            <li>"Wake-on-LAN works while powered off" → +5 VSB standby rail.</li>
          </ul>
        `
      },
      {
        title: '11. Virtualization & Cloud',
        body: `
          <p><b>Virtualization</b> = running multiple isolated operating systems on one physical machine by abstracting the hardware. <b>Cloud computing</b> = renting on-demand virtualized compute, storage, and services from a provider over the Internet. Cloud is built on top of virtualization. Exam tests hypervisor types, service models, deployment models, and shared responsibility.</p>

          <h2>Why virtualize?</h2>
          <ul>
            <li><b>Consolidation</b> — pack many VMs onto one host. Better hardware utilization (a bare-metal server typically ran at 5-15%).</li>
            <li><b>Isolation</b> — a crash in one VM doesn't affect others. Different OSes side by side.</li>
            <li><b>Snapshots / rollback</b> — capture state, restore in seconds. Safe testing.</li>
            <li><b>Live migration</b> — move a running VM between physical hosts with no downtime (VMware <b>vMotion</b>, Hyper-V Live Migration).</li>
            <li><b>Cost</b> — reduces hardware, power, cooling, datacenter space.</li>
            <li><b>Disaster recovery</b> — replicate VMs to another site for failover.</li>
            <li><b>Sandboxing / training</b> — safely run untrusted code or build lab environments.</li>
          </ul>

          <h2>Hypervisor — the layer that runs VMs</h2>
          <p><b>What:</b> Software (or firmware) that creates and manages virtual machines. Also called a <b>VMM</b> (Virtual Machine Monitor).</p>

          <h3>Type 1 — bare-metal hypervisor</h3>
          <p><b>What:</b> Runs DIRECTLY on the hardware, no host OS underneath.</p>
          <p><b>Why:</b> Lower overhead, higher performance, smaller attack surface. Mandatory for production datacenter use.</p>
          <p><b>Examples:</b></p>
          <ul>
            <li><b>VMware ESXi</b> — enterprise standard, managed by vCenter.</li>
            <li><b>Microsoft Hyper-V</b> (Server role).</li>
            <li><b>KVM</b> (Kernel-based Virtual Machine) — built into the Linux kernel. Powers most public cloud (AWS Nitro / EC2, Azure, GCP).</li>
            <li><b>Xen</b> — open-source, was used by AWS pre-Nitro, still used by Citrix.</li>
            <li><b>Proxmox VE</b> — open-source platform built on KVM + LXC.</li>
            <li><b>Nutanix AHV</b>, <b>Oracle VM</b>.</li>
          </ul>

          <h3>Type 2 — hosted hypervisor</h3>
          <p><b>What:</b> Runs as an application on top of a regular OS (Windows, macOS, Linux).</p>
          <p><b>Why:</b> Easy to install + use for development, testing, training. Performance is lower because the host OS sits in the middle.</p>
          <p><b>Examples:</b></p>
          <ul>
            <li><b>VMware Workstation</b> (Pro / Player) on Windows / Linux.</li>
            <li><b>VMware Fusion</b> on macOS.</li>
            <li><b>Oracle VirtualBox</b> — free, cross-platform.</li>
            <li><b>Parallels Desktop</b> — macOS, especially Apple Silicon.</li>
            <li><b>QEMU</b> on its own (without KVM) is technically a Type 2 emulator.</li>
          </ul>

          <h2>VM components</h2>
          <ul>
            <li><b>vCPU</b> (Virtual CPU) — slice of host CPU time.</li>
            <li><b>vRAM</b> — partition of host memory. Some hypervisors support <b>ballooning</b> + <b>page sharing</b> for overcommit.</li>
            <li><b>vNIC</b> (Virtual NIC) — connects VM to a <b>virtual switch (vSwitch)</b> or bridged/NAT host network.</li>
            <li><b>Virtual disk</b> — file on host (VMDK = VMware, VHD/VHDX = Hyper-V, QCOW2 = KVM, VDI = VirtualBox).</li>
            <li><b>Snapshot</b> — point-in-time capture of VM state (RAM + disk). Used for testing rollback; not a replacement for backups.</li>
            <li><b>Guest additions / VMware Tools</b> — paravirtualized drivers + clipboard / time sync.</li>
          </ul>

          <h2>Hardware virtualization support</h2>
          <p>Modern CPUs include extensions used by hypervisors for near-bare-metal speed:</p>
          <ul>
            <li><b>Intel VT-x</b> — Virtualization Technology for x86.</li>
            <li><b>Intel VT-d</b> — IOMMU for direct device passthrough.</li>
            <li><b>AMD-V / SVM</b> — Secure Virtual Machine, AMD's equivalent of VT-x.</li>
            <li><b>AMD-Vi</b> — IOMMU on AMD.</li>
          </ul>
          <p>Must be enabled in UEFI/BIOS. Without it Hyper-V, WSL2, and many Type-2 hypervisors refuse to start.</p>

          <h2>Containers vs VMs</h2>
          <p><b>Containers</b> (Docker, Podman, LXC) share the host kernel and isolate at the OS process level using namespaces + cgroups. <b>VMs</b> run an entire OS each, isolated at the hardware level.</p>
          <ul>
            <li>Containers: seconds to start, MB-sized images, lower overhead. Used for cloud-native microservices.</li>
            <li>VMs: minutes to start, GB-sized images, stronger isolation. Used for legacy apps, mixed OSes, regulatory boundaries.</li>
            <li><b>Kubernetes (K8s)</b> orchestrates containers at scale.</li>
          </ul>

          <h2>Cloud — the on-demand model</h2>
          <p><b>NIST</b> (National Institute of Standards and Technology, SP 800-145) defines five essential characteristics of cloud:</p>
          <ol>
            <li><b>On-demand self-service</b> — user spins up resources without human ticket.</li>
            <li><b>Broad network access</b> — reachable over standard protocols (HTTPS / API).</li>
            <li><b>Resource pooling</b> — provider's resources are shared across tenants.</li>
            <li><b>Rapid elasticity</b> — scale up and down quickly with demand.</li>
            <li><b>Measured service</b> — pay-as-you-go metered usage.</li>
          </ol>

          <h2>Cloud service models</h2>

          <h3>IaaS — Infrastructure as a Service</h3>
          <p><b>What:</b> Virtual machines, virtual networks, block / object storage rented from a provider.</p>
          <p><b>Provider responsibility:</b> Datacenter, hypervisor, hardware.<br>
          <b>You manage:</b> Guest OS, patches, apps, data, identity.</p>
          <p><b>Examples:</b> AWS EC2 + EBS + VPC; Azure Virtual Machines; GCP Compute Engine.</p>

          <h3>PaaS — Platform as a Service</h3>
          <p><b>What:</b> Managed runtime / app platform. Push code, provider runs it.</p>
          <p><b>Provider:</b> OS, runtime, scaling, load balancers, patching.<br>
          <b>You:</b> App code + data + config.</p>
          <p><b>Examples:</b> Azure App Service, AWS Elastic Beanstalk, Heroku, Google Cloud Run, Cloud Foundry.</p>

          <h3>SaaS — Software as a Service</h3>
          <p><b>What:</b> Finished application delivered over the web.</p>
          <p><b>Provider:</b> Everything except your data + user accounts.<br>
          <b>You:</b> Data classification, identity / access policy.</p>
          <p><b>Examples:</b> Microsoft 365, Google Workspace, Salesforce, Dropbox, Slack.</p>

          <h3>FaaS — Function as a Service (Serverless)</h3>
          <p><b>What:</b> Provider runs short-lived event-driven functions. You write a function; provider auto-scales each invocation.</p>
          <p><b>Examples:</b> AWS Lambda, Azure Functions, GCP Cloud Functions, Cloudflare Workers.</p>

          <h3>Other "as a Service" terms</h3>
          <ul>
            <li><b>DBaaS</b> — Database as a Service (RDS, Cosmos DB, Cloud SQL).</li>
            <li><b>DaaS</b> — Desktop as a Service (Azure Virtual Desktop, AWS WorkSpaces).</li>
            <li><b>SECaaS</b> — Security as a Service.</li>
            <li><b>IDaaS</b> — Identity as a Service (Okta, Auth0, Entra ID).</li>
          </ul>

          <h2>Cloud deployment models</h2>
          <ul>
            <li><b>Public cloud</b> — provider-owned, shared multi-tenant. AWS, Azure, GCP, Oracle Cloud.</li>
            <li><b>Private cloud</b> — single-org, on-prem or hosted. Provides cloud experience without multi-tenancy. VMware Cloud Foundation, OpenStack.</li>
            <li><b>Hybrid cloud</b> — public + private together with workload portability. Often using <b>direct connect</b> circuits.</li>
            <li><b>Community cloud</b> — shared by orgs with common requirements (e.g., government, regulated industries).</li>
            <li><b>Multi-cloud</b> — using more than one public provider intentionally for resilience or feature mix.</li>
          </ul>

          <h2>Shared responsibility model</h2>
          <p>Critical for the exam. Provider secures the cloud, customer secures what's in the cloud — but the split shifts by service model.</p>
          <table style="width:100%;font-size:13px;border-collapse:collapse">
            <tr><th align="left" style="padding:4px;border-bottom:1px solid #444">Layer</th><th align="left" style="padding:4px;border-bottom:1px solid #444">On-prem</th><th align="left" style="padding:4px;border-bottom:1px solid #444">IaaS</th><th align="left" style="padding:4px;border-bottom:1px solid #444">PaaS</th><th align="left" style="padding:4px;border-bottom:1px solid #444">SaaS</th></tr>
            <tr><td>Data / Identity</td><td>You</td><td>You</td><td>You</td><td>You</td></tr>
            <tr><td>App</td><td>You</td><td>You</td><td>You</td><td>Provider</td></tr>
            <tr><td>OS</td><td>You</td><td>You</td><td>Provider</td><td>Provider</td></tr>
            <tr><td>Hypervisor / HW / DC</td><td>You</td><td>Provider</td><td>Provider</td><td>Provider</td></tr>
          </table>

          <h2>Key cloud concepts</h2>
          <ul>
            <li><b>Elasticity</b> — auto-scale resources up and down with demand.</li>
            <li><b>Scalability</b> — capability to grow (vertical = bigger VM; horizontal = more VMs behind LB).</li>
            <li><b>High availability</b> — multi-AZ deployments, redundancy.</li>
            <li><b>Region</b> — geographic group of datacenters.</li>
            <li><b>Availability Zone (AZ)</b> — independent fault-isolated datacenter within a region. Most regions have 3.</li>
            <li><b>Metered billing</b> — pay only for what you use.</li>
            <li><b>Cloud bursting</b> — extend on-prem workload into public cloud during peak.</li>
          </ul>

          <h2>Common cloud risks</h2>
          <ul>
            <li><b>Misconfiguration</b> — open S3 buckets, weak IAM. Top cause of breaches.</li>
            <li><b>Vendor lock-in</b> — heavy use of proprietary services makes migration costly.</li>
            <li><b>Cost overrun</b> — auto-scale runaway, forgotten resources. Use budgets + tags + cost alerts.</li>
            <li><b>Compliance + data sovereignty</b> — which countries can store the data legally?</li>
            <li><b>Account takeover</b> — phished root credentials → enforce MFA + PIM.</li>
          </ul>

          <h2>Common cloud terminology</h2>
          <ul>
            <li><b>VPC</b> / <b>VNet</b> (Virtual Private Cloud / Virtual Network) — isolated network in cloud.</li>
            <li><b>NSG</b> / <b>Security Group</b> — stateful firewall for VMs.</li>
            <li><b>NACL</b> — stateless subnet ACL.</li>
            <li><b>Reserved Instance / Savings Plan</b> — 1-3 year commitment for discount.</li>
            <li><b>Spot / Preemptible</b> — deep discount; can be reclaimed.</li>
            <li><b>CMK / BYOK</b> — Customer-Managed Keys / Bring Your Own Key for encryption.</li>
            <li><b>CDN</b> — Content Delivery Network (CloudFront, Azure Front Door, Cloudflare).</li>
            <li><b>Direct Connect / ExpressRoute / Interconnect</b> — private dedicated link to cloud, bypasses Internet.</li>
          </ul>

          <h2>Exam tips</h2>
          <ul>
            <li>"Bare-metal hypervisor in datacenter" → Type 1 (ESXi, Hyper-V, KVM).</li>
            <li>"Run Linux VM on my laptop" → Type 2 (VirtualBox, Workstation, Fusion, Parallels).</li>
            <li>"Provider manages OS + runtime, I deploy code" → PaaS.</li>
            <li>"Finished app accessed via web browser" → SaaS.</li>
            <li>"Customer responsibility for guest OS patches" → IaaS.</li>
            <li>"Mix of on-prem and public cloud" → hybrid.</li>
            <li>"Independent fault domain inside a region" → Availability Zone.</li>
            <li>"Pay only for what you use" → measured / metered service.</li>
          </ul>
        `
      },
      {
        title: '12. Troubleshooting Methodology',
        body: `
          <p>Troubleshooting is a defined, repeatable PROCESS — not random guessing. CompTIA loves "which step is FIRST / NEXT" questions and expects you to follow the exact 6-step sequence. Memorize the order. Failing to do so on the job leads to wasted time, lost data, and escalated incidents.</p>

          <h2>The CompTIA 6-step troubleshooting method</h2>

          <h3>Step 1 — Identify the problem</h3>
          <p><b>What you do:</b></p>
          <ul>
            <li><b>Gather information</b> — ask the user open-ended questions ("When did this start? What changed? What error appears?").</li>
            <li><b>Question users</b> politely + non-judgmentally.</li>
            <li><b>Identify user-changed environment</b> — new software, new hardware, OS updates, antivirus install.</li>
            <li><b>Reproduce</b> the issue if safe to do so.</li>
            <li><b>Back up data</b> BEFORE making changes — protects against further loss.</li>
            <li><b>Inquire about environmental or infrastructure changes</b> — power surge, recent firmware, new building wiring.</li>
          </ul>
          <p><b>Why:</b> Cannot fix what you don't understand. Many "problems" are misunderstandings or expected behavior.</p>

          <h3>Step 2 — Establish a theory of probable cause</h3>
          <p><b>What you do:</b></p>
          <ul>
            <li><b>Question the obvious</b> — is it plugged in? Powered on? Loose cable?</li>
            <li>Consider multiple approaches: external research (vendor KBs, forums), top-to-bottom OSI layer review, divide-and-conquer.</li>
            <li>Refer to internal documentation (runbooks, change logs).</li>
          </ul>
          <p><b>Why:</b> A focused theory channels effort. Best techs run several theories in parallel, ranked by likelihood and ease of testing.</p>

          <h3>Step 3 — Test the theory to determine cause</h3>
          <p><b>Two outcomes:</b></p>
          <ul>
            <li>Theory <b>confirmed</b> → proceed to step 4 (plan of action).</li>
            <li>Theory <b>not confirmed</b> → form a new theory (loop back to Step 2) OR <b>escalate</b> to someone with higher access / expertise.</li>
          </ul>
          <p><b>How:</b> Change ONE thing at a time so the result is unambiguous. Don't replace cable, drivers, and RAM all at once — you won't know which fixed it.</p>

          <h3>Step 4 — Establish a plan of action to resolve and implement the solution</h3>
          <p><b>Inputs to the plan:</b></p>
          <ul>
            <li>Vendor documentation, internal SOPs, peer review.</li>
            <li>Risk assessment — what could go wrong?</li>
            <li>Change management approval if production / customer impact.</li>
            <li>Backout / rollback plan.</li>
            <li>Communication plan — who needs notice, what's the downtime window.</li>
          </ul>
          <p><b>Then execute</b> the plan during the agreed maintenance window. Keep it surgical.</p>

          <h3>Step 5 — Verify full system functionality and, if applicable, implement preventive measures</h3>
          <p><b>What you do:</b></p>
          <ul>
            <li>Confirm the original symptom is gone.</li>
            <li>Test related functions to ensure no regression.</li>
            <li>Have the user verify the fix from their perspective.</li>
            <li>Apply preventive measures — patch sources of the problem, add monitoring, tune alerts, update runbooks.</li>
          </ul>
          <p><b>Why:</b> A fix that breaks something else is a regression. Verifying broader functionality avoids creating a new ticket out of the old one.</p>

          <h3>Step 6 — Document findings, actions, and outcomes</h3>
          <p><b>What you record:</b></p>
          <ul>
            <li>Symptom, root cause, fix applied, why.</li>
            <li>Affected systems + users + timeline.</li>
            <li>Update knowledge base / KB articles / runbooks for next time.</li>
            <li>Close the ticket with searchable notes.</li>
          </ul>
          <p><b>Why critical:</b> The next tech (or your future self at 3 AM) needs a paper trail. Trend analysis across tickets surfaces systemic issues.</p>

          <h2>Cross-cutting principles</h2>
          <ul>
            <li><b>Always consider corporate policies, procedures, and impacts BEFORE applying changes.</b></li>
            <li><b>Backup first</b> — always have a known-good restore point.</li>
            <li><b>One change at a time</b> when testing theories.</li>
            <li><b>Escalate</b> when the scope or risk exceeds your authority or skill. Not a failure — it's correct procedure.</li>
            <li><b>Safety first</b> — ESD for hardware, lockout/tagout for power, MSDS/SDS for chemicals.</li>
            <li><b>Respect privacy + confidentiality</b> when accessing user systems.</li>
            <li><b>Communicate professionally</b> with users + stakeholders throughout.</li>
          </ul>

          <h2>Common troubleshooting techniques</h2>
          <ul>
            <li><b>Divide and conquer / bisection</b> — split the problem in half repeatedly to localize. (Switch port? Cable? NIC? Driver? App?)</li>
            <li><b>Top-down OSI</b> — start at L7 application, descend if no luck.</li>
            <li><b>Bottom-up OSI</b> — start at L1 physical (cable, power, link), ascend. Often best for "no network at all".</li>
            <li><b>Substitution</b> — swap suspected part with known-good (cable, RAM stick, power supply).</li>
            <li><b>Comparison</b> — known-working similar system shows what differs.</li>
            <li><b>Eliminate the simplest first</b> — outlet, cable, power, reboot before tearing apart.</li>
            <li><b>Rubber-duck</b> — explain the problem out loud or to a colleague; often reveals the solution.</li>
          </ul>

          <h2>Useful diagnostic categories</h2>
          <ul>
            <li><b>Power</b> — outlet, cable, PSU, battery.</li>
            <li><b>POST</b> (Power-On Self-Test) errors / beep codes / debug LEDs.</li>
            <li><b>OS boot</b> — Safe Mode, WinRE, recovery USB, live Linux ISO for diagnosis.</li>
            <li><b>Drivers</b> — Device Manager errors, vendor sites, rollback to previous driver.</li>
            <li><b>Logs</b> — Event Viewer (Windows), Console / log files (macOS), <code>journalctl</code> / <code>/var/log</code> (Linux).</li>
            <li><b>Network</b> — link lights, ipconfig/ip a, ping, tracert, DNS resolve, port scan.</li>
            <li><b>Storage</b> — SMART, chkdsk, fsck, fragmentation, free space.</li>
            <li><b>Resource</b> — CPU / RAM / disk I/O via Task Manager, Resource Monitor, top, htop, iostat.</li>
          </ul>

          <h2>Change management — interaction with troubleshooting</h2>
          <p>For non-trivial fixes in production:</p>
          <ol>
            <li><b>RFC</b> (Request for Change) opened with scope, justification, risk.</li>
            <li><b>CAB</b> (Change Advisory Board) reviews and approves.</li>
            <li><b>Test in lab / pilot</b> when feasible.</li>
            <li><b>Schedule maintenance window</b>, notify affected users.</li>
            <li><b>Execute</b> with rollback plan ready.</li>
            <li><b>Post-implementation review</b> — capture outcome, update CMDB.</li>
          </ol>

          <h2>Ticket / incident lifecycle (ITIL-aligned)</h2>
          <ul>
            <li><b>Open</b> — symptom, user info, severity / priority.</li>
            <li><b>Assignment</b> — to the correct queue / tier.</li>
            <li><b>Diagnosis</b> — follow troubleshooting steps.</li>
            <li><b>Resolution</b> — fix applied, user confirms.</li>
            <li><b>Closure</b> — knowledge base updated.</li>
            <li><b>Trends</b> — repeat tickets indicate <b>problem management</b> issue, not just incidents.</li>
          </ul>

          <h2>Soft skills that exam tests</h2>
          <ul>
            <li><b>Cultural sensitivity</b> + respect.</li>
            <li><b>Active listening</b> — don't interrupt.</li>
            <li><b>Use proper language</b> — avoid jargon with non-tech users.</li>
            <li><b>Avoid distractions</b> — no personal calls, no checking social media on the user's PC.</li>
            <li><b>Maintain a positive attitude</b> + project confidence.</li>
            <li><b>Set + meet expectations</b> — give a realistic ETA.</li>
            <li><b>Deal appropriately with confidential / private materials</b> on a user's device.</li>
            <li><b>Don't argue or be defensive</b> — even if user is wrong.</li>
          </ul>

          <h2>Exam tips</h2>
          <ul>
            <li>Memorize the SIX steps IN ORDER: Identify → Theory → Test → Plan + Implement → Verify → Document.</li>
            <li>"FIRST step" is always Identify the problem.</li>
            <li>"NEXT step after establishing theory" → Test the theory.</li>
            <li>"AFTER implementing solution" → Verify functionality (then document).</li>
            <li>"LAST step" → Document.</li>
            <li>"Cannot resolve at your skill level" → Escalate.</li>
            <li>Always back up before making changes.</li>
          </ul>
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
          <p>Windows ships in multiple <b>editions</b> (also called SKUs — Stock Keeping Units) that gate features by use case. Exam expects you to recognize which edition is required for domain join, BitLocker, Group Policy, RDP host, Hyper-V, and AppLocker — and to identify the built-in admin tools and where to launch them.</p>

          <h2>Windows 10 / 11 — main editions</h2>

          <h3>Home</h3>
          <p><b>What:</b> Consumer / OEM edition shipped on most retail laptops.</p>
          <p><b>Why constrained:</b> Microsoft reserves enterprise features for paid SKUs. Home cannot:</p>
          <ul>
            <li>Join an Active Directory <b>domain</b>.</li>
            <li>Manage <b>BitLocker</b> via UI (device encryption may exist on modern hardware with MSA sign-in).</li>
            <li>Use <b>Group Policy Editor</b> (<code>gpedit.msc</code>).</li>
            <li>Host a Remote Desktop session (can only connect OUT as a client).</li>
            <li>Run <b>Hyper-V</b>.</li>
          </ul>

          <h3>Pro</h3>
          <p><b>What:</b> Small-business / power-user edition. The minimum for any business environment.</p>
          <p><b>Adds over Home:</b></p>
          <ul>
            <li><b>Domain join</b> + <b>Microsoft Entra Join</b> (formerly Azure AD).</li>
            <li><b>BitLocker</b> + BitLocker To Go.</li>
            <li><b>Group Policy</b> client + local <code>gpedit.msc</code>.</li>
            <li><b>RDP host</b> — Remote Desktop service accepts inbound connections.</li>
            <li><b>Hyper-V</b> — Type 1 hypervisor built in.</li>
            <li><b>Windows Sandbox</b> — ephemeral isolated session.</li>
            <li><b>WSL</b> (Windows Subsystem for Linux), <b>WSLg</b> for graphical Linux apps.</li>
          </ul>

          <h3>Pro for Workstations</h3>
          <p><b>What:</b> Pro with extras targeted at high-end workstations.</p>
          <p><b>Adds:</b></p>
          <ul>
            <li>Up to <b>6 TB RAM</b> and 4 CPU sockets.</li>
            <li><b>ReFS</b> (Resilient File System) support — checksums, scale.</li>
            <li><b>SMB Direct</b> over RDMA.</li>
            <li><b>Persistent memory (PMEM)</b> support.</li>
          </ul>

          <h3>Enterprise</h3>
          <p><b>What:</b> Sold via <b>volume licensing</b> + Microsoft 365 E3/E5 plans. Targets large orgs and managed deployments.</p>
          <p><b>Adds:</b></p>
          <ul>
            <li><b>AppLocker</b> / <b>WDAC</b> (Windows Defender Application Control) — allowlist apps.</li>
            <li><b>DirectAccess</b> (legacy always-on VPN) / <b>Always On VPN</b> (modern).</li>
            <li><b>Windows Defender for Endpoint</b> integration.</li>
            <li><b>Credential Guard</b> + <b>Device Guard</b> — VBS-based credential isolation.</li>
            <li>Long-Term Servicing Channel (<b>LTSC</b>) — minimal features, 10-year support for kiosks, ATMs, medical equipment.</li>
            <li>Windows Information Protection (legacy DLP).</li>
          </ul>

          <h3>Education / Pro Education</h3>
          <p><b>What:</b> Enterprise feature set licensed for schools. Functionally identical to Enterprise in most respects.</p>

          <h3>IoT Enterprise</h3>
          <p><b>What:</b> Embedded / fixed-purpose deployments (kiosks, signage, industrial). Allows shell replacement, write filters.</p>

          <h2>Differences worth remembering</h2>
          <table style="width:100%;font-size:13px;border-collapse:collapse">
            <tr><th align="left" style="padding:4px;border-bottom:1px solid #444">Feature</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Home</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Pro</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Enterprise</th></tr>
            <tr><td>Domain join</td><td>—</td><td>✓</td><td>✓</td></tr>
            <tr><td>BitLocker management</td><td>—</td><td>✓</td><td>✓</td></tr>
            <tr><td>Group Policy editor</td><td>—</td><td>✓</td><td>✓</td></tr>
            <tr><td>RDP host (accept connections)</td><td>—</td><td>✓</td><td>✓</td></tr>
            <tr><td>Hyper-V</td><td>—</td><td>✓</td><td>✓</td></tr>
            <tr><td>AppLocker / WDAC</td><td>—</td><td>—</td><td>✓</td></tr>
            <tr><td>Credential Guard</td><td>—</td><td>—</td><td>✓</td></tr>
            <tr><td>LTSC release channel</td><td>—</td><td>—</td><td>✓</td></tr>
          </table>

          <h2>32-bit vs 64-bit</h2>
          <ul>
            <li><b>32-bit (x86)</b> — max 4 GB RAM addressable (~3.5 GB usable). Only legacy installs.</li>
            <li><b>64-bit (x64 / AMD64)</b> — addresses 16 EB theoretical, typically 128-512 GB in consumer SKUs. Required by Windows 11.</li>
            <li><b>ARM64</b> — Windows on ARM for Snapdragon / Surface Pro X. Uses <b>x86/x64 emulation</b> layer for compatibility.</li>
          </ul>

          <h2>Activation + licensing</h2>
          <ul>
            <li><b>OEM</b> license — tied to motherboard / firmware. Transferred with the device.</li>
            <li><b>Retail</b> license — moveable to a different PC after deactivation.</li>
            <li><b>Volume licensing (VLSC, M365 admin center)</b> — MAK or KMS keys for enterprises.</li>
            <li><b>KMS</b> (Key Management Service) — on-prem server activates clients on the network; re-activation every 180 days.</li>
            <li><b>MAK</b> (Multiple Activation Key) — single-use key per install up to a quota.</li>
            <li><b>Digital license</b> — tied to your Microsoft account in modern Windows.</li>
          </ul>

          <h2>Built-in management consoles + tools</h2>

          <h3>MMC — Microsoft Management Console</h3>
          <p>Container for snap-ins (the <code>.msc</code> files). Run <code>mmc.exe</code>, File → Add/Remove Snap-in to assemble a custom console.</p>

          <h3>Common <code>.msc</code> snap-ins</h3>
          <table style="width:100%;font-size:13px;border-collapse:collapse">
            <tr><th align="left" style="padding:4px;border-bottom:1px solid #444">Command</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Tool</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Use</th></tr>
            <tr><td><code>devmgmt.msc</code></td><td>Device Manager</td><td>Drivers, hardware errors (yellow ⚠), enable/disable devices.</td></tr>
            <tr><td><code>diskmgmt.msc</code></td><td>Disk Management</td><td>Partitions, volumes, format, change letters.</td></tr>
            <tr><td><code>services.msc</code></td><td>Services</td><td>Start/stop/disable services, startup type.</td></tr>
            <tr><td><code>eventvwr.msc</code></td><td>Event Viewer</td><td>Application/System/Security logs.</td></tr>
            <tr><td><code>gpedit.msc</code></td><td>Local Group Policy Editor</td><td>Local computer + user policies. Pro+.</td></tr>
            <tr><td><code>secpol.msc</code></td><td>Local Security Policy</td><td>Account/audit/user-rights policies.</td></tr>
            <tr><td><code>compmgmt.msc</code></td><td>Computer Management</td><td>Bundled console (users/groups, services, disk, eventvwr).</td></tr>
            <tr><td><code>certmgr.msc</code></td><td>User Certificates</td><td>Personal cert store.</td></tr>
            <tr><td><code>certlm.msc</code></td><td>Computer Certificates</td><td>Machine cert store (HKLM).</td></tr>
            <tr><td><code>wf.msc</code></td><td>Windows Defender Firewall Advanced</td><td>Inbound/outbound rules.</td></tr>
            <tr><td><code>perfmon.msc</code></td><td>Performance Monitor</td><td>Counters + Data Collector Sets.</td></tr>
            <tr><td><code>taskschd.msc</code></td><td>Task Scheduler</td><td>Scheduled jobs.</td></tr>
            <tr><td><code>printmanagement.msc</code></td><td>Print Management</td><td>Servers, drivers, queues.</td></tr>
          </table>

          <h3>Non-MMC tools</h3>
          <table style="width:100%;font-size:13px;border-collapse:collapse">
            <tr><th align="left" style="padding:4px;border-bottom:1px solid #444">Command</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Tool</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Use</th></tr>
            <tr><td><code>regedit</code></td><td>Registry Editor</td><td>Direct registry edits — dangerous, back up first.</td></tr>
            <tr><td><code>msconfig</code></td><td>System Configuration</td><td>Boot options, Safe Mode, services, startup pointer to Task Manager.</td></tr>
            <tr><td><code>msinfo32</code></td><td>System Information</td><td>Hardware, drivers, environment.</td></tr>
            <tr><td><code>dxdiag</code></td><td>DirectX Diagnostic</td><td>GPU + audio + input details.</td></tr>
            <tr><td><code>taskmgr</code></td><td>Task Manager</td><td>Processes, performance, startup apps, users.</td></tr>
            <tr><td><code>resmon</code></td><td>Resource Monitor</td><td>Detailed CPU/RAM/disk/network counters.</td></tr>
            <tr><td><code>sysdm.cpl</code></td><td>System Properties</td><td>Computer name, perf options, env vars.</td></tr>
            <tr><td><code>appwiz.cpl</code></td><td>Programs and Features</td><td>Uninstall classic Win32 apps.</td></tr>
            <tr><td><code>ncpa.cpl</code></td><td>Network Connections</td><td>NIC properties.</td></tr>
            <tr><td><code>powercfg.cpl</code></td><td>Power Options</td><td>Plans, sleep, hibernation.</td></tr>
            <tr><td><code>winver</code></td><td>About Windows</td><td>Build + edition.</td></tr>
            <tr><td><code>cleanmgr</code></td><td>Disk Cleanup</td><td>Free space — also has /sageset for automation.</td></tr>
          </table>

          <h2>Settings vs Control Panel</h2>
          <p>Modern <b>Settings app</b> (Win+I) gradually replaces classic <b>Control Panel</b>. Many advanced functions still live in Control Panel or <code>.cpl</code> applets. Know both — exam can use either path.</p>

          <h2>Run dialog + shell shortcuts</h2>
          <p><b>Win+R</b> opens Run. Useful shortcuts:</p>
          <ul>
            <li><code>shell:startup</code> — current user startup folder.</li>
            <li><code>shell:common startup</code> — all-users startup folder.</li>
            <li><code>shell:sendto</code> — Send To menu items.</li>
            <li><code>%temp%</code> — temp dir.</li>
            <li><code>%appdata%</code> — Roaming AppData.</li>
            <li><code>%localappdata%</code> — Local AppData.</li>
            <li><code>%userprofile%</code> — user home folder.</li>
            <li><code>%windir%</code>, <code>%systemroot%</code> — Windows directory.</li>
          </ul>

          <h2>Update channels</h2>
          <ul>
            <li><b>General Availability Channel (GAC)</b> — consumer + business. Annual feature updates, monthly cumulative.</li>
            <li><b>Long-Term Servicing Channel (LTSC)</b> — Enterprise only. New feature release every ~2-3 years, ~10 years support. No Store, no Edge updates pushed (deliberately stable).</li>
            <li><b>Insider Preview</b> — Dev / Beta / Release Preview rings for testing.</li>
            <li><b>Windows Update for Business (WUfB)</b> — policy-based deferrals.</li>
            <li><b>WSUS</b> (Windows Server Update Services) — on-prem repository pushing approved updates.</li>
          </ul>

          <h2>Upgrade paths</h2>
          <ul>
            <li><b>In-place upgrade</b> — keeps apps + data. Win10 → Win11 if hardware meets reqs (TPM 2.0, Secure Boot, UEFI, 4 GB RAM, 64-bit CPU on approved list).</li>
            <li><b>Clean install</b> — wipe + reinstall.</li>
            <li><b>Reset this PC</b> — keep files or remove all. Built into WinRE.</li>
            <li><b>USMT</b> (User State Migration Tool) — automates migration of user profiles, settings, data for refresh scenarios.</li>
          </ul>

          <h2>Exam tips</h2>
          <ul>
            <li>"Must join AD domain" → Pro or higher (NOT Home).</li>
            <li>"AppLocker / WDAC" → Enterprise / Education.</li>
            <li>"Kiosk with 10-year support" → Enterprise LTSC.</li>
            <li>"Manage local services + view event logs" → Computer Management (<code>compmgmt.msc</code>).</li>
            <li>"Boot to Safe Mode from running Windows" → <code>msconfig</code> → Boot tab.</li>
            <li>"On-prem corporate update server" → WSUS.</li>
            <li>"Apply existing on-prem Windows licenses to Azure VMs" → Azure Hybrid Benefit.</li>
          </ul>
        `
      },
      {
        title: '2. Command-Line — Windows',
        body: `
          <p>Windows offers three shells: legacy <b>cmd.exe</b> (a.k.a. <b>Command Prompt</b> or DOS-style shell), modern <b>PowerShell</b> (object-based, recommended), and <b>Windows Terminal</b> (tabbed UI hosting any of them). Exam tests cmd-style utilities heavily. Most run from either shell.</p>

          <h2>Launching a shell</h2>
          <ul>
            <li><b>cmd</b> — Win+R → <code>cmd</code> → Enter.</li>
            <li><b>Elevated cmd</b> — Win+X → "Terminal (Admin)" / right-click → "Run as administrator". Required for any system change.</li>
            <li><b>PowerShell</b> — Win+R → <code>powershell</code> (5.1, in-box) or <code>pwsh</code> (PS 7+, cross-platform install).</li>
            <li><b>Windows Terminal</b> — modern host with tabs, themes, GPU rendering.</li>
          </ul>

          <h2>Networking diagnostics</h2>

          <h3>ipconfig — IP Configuration</h3>
          <pre><code>ipconfig               # brief NIC list
ipconfig /all          # full info: MAC, DHCP, DNS, lease
ipconfig /release      # drop DHCP lease for all NICs
ipconfig /release "Wi-Fi"
ipconfig /renew        # request new DHCP lease
ipconfig /flushdns     # clear local DNS resolver cache
ipconfig /displaydns   # show cached DNS entries
ipconfig /registerdns  # re-register with DNS server</code></pre>
          <p><b>Use cases:</b> Verify IP / gateway / DNS, fix stuck DHCP lease (release + renew), clear bad DNS cache after a record change.</p>

          <h3>ping — ICMP echo</h3>
          <pre><code>ping host                    # 4 packets, default
ping -t host                 # continuous until Ctrl+C
ping -n 100 host             # 100 packets
ping -l 1500 host            # 1500-byte payload (test MTU)
ping -a 8.8.8.8              # reverse-DNS the target</code></pre>
          <p><b>Use cases:</b> Reachability + latency. Loss patterns localize the fault. Some firewalls drop ICMP — absence of ping doesn't prove down.</p>

          <h3>tracert / pathping</h3>
          <pre><code>tracert host                 # hop-by-hop route, ICMP TTL
pathping host                # combined tracert + per-hop loss/latency over time</code></pre>
          <p><b>Use cases:</b> Locate where path breaks or latency jumps. pathping takes longer but produces statistics.</p>

          <h3>nslookup — DNS query</h3>
          <pre><code>nslookup host                    # quick lookup
nslookup host 8.8.8.8            # query specific server
nslookup -type=MX example.com    # mail records
nslookup -type=TXT example.com   # TXT (SPF/DKIM/DMARC)</code></pre>
          <p><b>Use cases:</b> Verify DNS resolution, compare authoritative vs local resolver.</p>

          <h3>netstat — network statistics</h3>
          <pre><code>netstat -an                  # all connections + listening sockets numeric
netstat -ano                 # adds PID
netstat -anob                # adds owning executable (admin)
netstat -r                   # routing table</code></pre>
          <p><b>Use cases:</b> Find which app is using a port, hunt unauthorized listeners, check whether a service is bound.</p>

          <h3>arp — Address Resolution Protocol cache</h3>
          <pre><code>arp -a                       # show local IP↔MAC cache
arp -d *                     # clear cache (admin)
arp -s 192.168.1.50 aa-bb-cc-dd-ee-ff   # static entry (rare)</code></pre>

          <h3>route — routing table</h3>
          <pre><code>route print                  # show all routes
route add 10.0.0.0 mask 255.0.0.0 192.168.1.1   # add (volatile)
route add ... -p             # persistent (survives reboot)
route delete 10.0.0.0</code></pre>

          <h3>nbtstat / net view (legacy SMB / NetBIOS)</h3>
          <pre><code>nbtstat -n                   # local NetBIOS names
net view                     # SMB-visible computers
net view \\\\server            # shares on server
net use Z: \\\\server\\share /persistent:yes</code></pre>

          <h3>Curl, Test-NetConnection (modern probes)</h3>
          <pre><code>curl -I https://example.com  # built into modern Windows
Test-NetConnection example.com -Port 443       # PowerShell: TCP test + traceroute</code></pre>

          <h2>System health + repair</h2>

          <h3>sfc — System File Checker</h3>
          <pre><code>sfc /scannow                 # verify + replace corrupt system files
sfc /verifyonly              # check only, no changes
sfc /scanfile=C:\\path\\file
sfc /scanboot                # next boot</code></pre>
          <p>Replaces protected files from the Component Store (WinSxS).</p>

          <h3>DISM — Deployment Image Servicing and Management</h3>
          <pre><code>DISM /Online /Cleanup-Image /CheckHealth      # quick
DISM /Online /Cleanup-Image /ScanHealth       # full scan
DISM /Online /Cleanup-Image /RestoreHealth    # repair Component Store from Windows Update</code></pre>
          <p><b>Combo workflow:</b> DISM /RestoreHealth → then sfc /scannow. Required when sfc alone can't repair.</p>

          <h3>chkdsk — Check Disk</h3>
          <pre><code>chkdsk                       # read-only summary of current drive
chkdsk D:                    # check D:
chkdsk /f C:                 # fix logical errors (reboot required for C:)
chkdsk /r C:                 # /f + recover readable info from bad sectors (long)
chkdsk /b C:                 # re-evaluate bad clusters</code></pre>
          <p><b>Caution:</b> Don't run /r on a failing SSD — flash doesn't have "bad sectors" in the HDD sense.</p>

          <h3>format / diskpart</h3>
          <pre><code>format D: /fs:NTFS /Q        # quick format D
diskpart                     # interactive partition tool
  list disk
  select disk 1
  clean
  create partition primary
  format fs=ntfs quick
  assign letter=E
  exit</code></pre>

          <h2>Process + service control</h2>
          <pre><code>tasklist                     # list processes
tasklist /v                  # verbose with username, mem, status
tasklist /svc                # show services per PID
taskkill /PID 1234 /F        # force kill
taskkill /IM notepad.exe /F  # by name
sc query                     # all services
sc query type= service state= all
sc qc <service>              # query config
sc stop <service>            # stop
sc start <service>           # start
sc config <service> start= auto    # set startup type</code></pre>

          <h2>User + group + permissions</h2>
          <pre><code>net user                     # list local users
net user alice               # detail on alice
net user alice * /add        # add user; prompt for password
net localgroup Administrators alice /add
whoami / whoami /priv        # current user + privileges
takeown /f C:\\path /r       # take ownership recursively
icacls C:\\path /grant alice:(M)    # grant Modify
icacls C:\\path /inheritance:r       # remove inherited
runas /user:Administrator cmd       # run as another user
gpresult /r                  # show applied Group Policy
gpresult /h gpreport.html    # full HTML report
gpupdate /force              # reapply policy now</code></pre>

          <h2>File copy + cleanup</h2>
          <pre><code>copy a b                     # single file
xcopy /E /I /H /K src dst    # legacy bulk copy
robocopy src dst /MIR /Z /R:3 /W:5 /LOG:copy.log
  # /MIR mirror (deletes extras at dst!)
  # /Z resumable
  # /R retry count, /W wait
attrib +h file.txt           # set hidden bit
del file                     # delete file
del /s /q dir                # delete recursively quietly
rmdir /s /q dir              # remove dir tree
cleanmgr /sageset:1          # configure cleanup preset</code></pre>

          <h2>Power + scheduling</h2>
          <pre><code>shutdown /r /t 0             # reboot now
shutdown /s /t 600 /c "Maintenance"   # shut down in 10 min
shutdown /a                  # abort scheduled shutdown
shutdown /r /o               # advanced boot options
powercfg /batteryreport      # battery health HTML
powercfg /a                  # supported sleep states
powercfg /h on               # enable hibernation
schtasks /create /tn backup /tr "C:\\scripts\\bk.cmd" /sc daily /st 02:00
schtasks /run /tn backup
schtasks /delete /tn backup</code></pre>

          <h2>Useful utilities</h2>
          <ul>
            <li><code>winver</code> — Windows build + edition popup.</li>
            <li><code>systeminfo</code> — OS, BIOS, uptime, patches.</li>
            <li><code>wmic</code> — Windows Management Instrumentation Command-line (deprecated in Win 11 24H2; replaced by PowerShell <code>Get-CimInstance</code>).</li>
            <li><code>ver</code> — short version.</li>
            <li><code>set</code> — environment variables. <code>setx VAR val</code> persists.</li>
            <li><code>where program</code> — find executable in PATH.</li>
            <li><code>where /q program</code> — exit code, scriptable.</li>
            <li><code>fc a b</code> — file compare.</li>
            <li><code>findstr /S /I pattern *.log</code> — recursive grep.</li>
            <li><code>echo</code>, <code>cls</code>, <code>pause</code>, <code>title</code> — script flavoring.</li>
            <li><code>bitsadmin / curl / Invoke-WebRequest</code> — file downloads.</li>
            <li><code>certutil -hashfile file SHA256</code> — verify integrity.</li>
          </ul>

          <h2>Boot + recovery commands (run inside WinRE / install media)</h2>
          <pre><code>bootrec /fixmbr            # rewrite MBR (legacy BIOS systems)
bootrec /fixboot           # write new boot sector
bootrec /scanos            # find Windows installs
bootrec /rebuildbcd        # rebuild Boot Configuration Data
bcdedit /enum              # show BCD entries
bcdedit /set {default} safeboot minimal   # next boot → Safe Mode
bcdedit /deletevalue {default} safeboot
bcdboot C:\\Windows /s S: /f UEFI         # repair UEFI bootloader</code></pre>

          <h2>Helpful script-mode shortcuts</h2>
          <ul>
            <li><b>Run elevated PowerShell from cmd:</b> <code>powershell -Command "Start-Process powershell -Verb runAs"</code></li>
            <li><b>Wait for command + capture exit code:</b> <code>cmd /c "ping -n 1 host" & echo %errorlevel%</code></li>
            <li><b>For-loop over files:</b> <code>for %f in (*.log) do echo %f</code></li>
            <li><b>Bash-like piping:</b> <code>tasklist | findstr /I chrome</code></li>
          </ul>

          <h2>Exam tips</h2>
          <ul>
            <li>"Clear local DNS resolver cache" → <code>ipconfig /flushdns</code>.</li>
            <li>"Find which process owns a TCP port" → <code>netstat -ano</code> then match PID in Task Manager / <code>tasklist /svc</code>.</li>
            <li>"Restore corrupt system files" → <code>sfc /scannow</code>; if it fails, run <code>DISM /Online /Cleanup-Image /RestoreHealth</code> first.</li>
            <li>"Check disk for bad sectors" → <code>chkdsk /r</code>.</li>
            <li>"Reapply Group Policy now" → <code>gpupdate /force</code>.</li>
            <li>"Mirror folder contents incl. deletions" → <code>robocopy src dst /MIR</code>.</li>
            <li>"Rebuild BCD after boot failure" → <code>bootrec /rebuildbcd</code>.</li>
          </ul>
        `
      },
      {
        title: '3. macOS & Linux Essentials',
        body: `
          <p>A+ Core 2 covers Windows in depth + the basics of macOS and Linux that any field tech sees in mixed shops. Exam asks for built-in tools and core CLI commands on each platform.</p>

          <h2>macOS overview</h2>
          <p><b>macOS</b> is Apple's desktop operating system. Modern naming uses California place names (Ventura, Sonoma, Sequoia). UNIX-certified, built on the Darwin kernel + BSD userland + Apple frameworks.</p>

          <h3>Key built-in apps + utilities</h3>
          <ul>
            <li><b>Finder</b> — file manager. Sidebar shows Favorites, iCloud, Tags, devices.</li>
            <li><b>Launchpad</b> — iOS-style app grid.</li>
            <li><b>Mission Control</b> (F3 / 3-finger swipe up) — overview of all open windows + Spaces (virtual desktops).</li>
            <li><b>Spotlight</b> (Cmd+Space) — system-wide search, app launcher, math, definitions.</li>
            <li><b>System Settings</b> (formerly System Preferences) — central config.</li>
            <li><b>System Information</b> (Apple menu → About This Mac → More Info) — hardware + software details.</li>
            <li><b>Activity Monitor</b> — process manager (CPU, Memory, Energy, Disk, Network).</li>
            <li><b>Console</b> — system + app log viewer.</li>
            <li><b>Disk Utility</b> — format, partition, repair (First Aid), erase.</li>
            <li><b>Migration Assistant</b> — move data from old Mac / PC / Time Machine backup.</li>
            <li><b>Terminal</b> — UNIX shell (default zsh since Catalina).</li>
            <li><b>AirDrop</b> — peer Bluetooth + Wi-Fi file transfer between Apple devices.</li>
            <li><b>iCloud Drive</b> — Apple cloud file sync (and Photos, Mail, Contacts, etc.).</li>
            <li><b>Keychain Access</b> — credential + cert store (passwords, certs, secure notes).</li>
            <li><b>App Store</b> — software install.</li>
            <li><b>Boot Camp Assistant</b> — install Windows on Intel Macs. Not on Apple Silicon (Parallels / UTM instead).</li>
          </ul>

          <h3>Backup + recovery</h3>
          <ul>
            <li><b>Time Machine</b> — incremental backups to external drive or network share (AFP/SMB). Browse historical "snapshots" through a star-field UI.</li>
            <li><b>macOS Recovery</b> — boot to <b>Cmd+R</b> (Intel) or hold the power button (Apple Silicon) → Recovery contains Disk Utility, Reinstall macOS, Restore from Time Machine, Terminal, Network Utility.</li>
            <li><b>Snapshots</b> — APFS local snapshots used by Time Machine and Reverse Restore.</li>
          </ul>

          <h3>Security features</h3>
          <ul>
            <li><b>FileVault</b> — full-disk encryption via AES-XTS, tied to user password. Recovery key shown at enable.</li>
            <li><b>Gatekeeper</b> — only allows apps from App Store / identified developers by default. Right-click → Open lets you bypass per-app.</li>
            <li><b>XProtect</b> — built-in signature-based malware scanner.</li>
            <li><b>SIP</b> (System Integrity Protection) — kernel-enforced protection of system directories. Disabled only from Recovery (<code>csrutil disable</code>).</li>
            <li><b>Notarization</b> — Apple must scan + sign third-party apps for safe distribution.</li>
            <li><b>T2 / Apple Silicon Secure Enclave</b> — hardware key store; Touch ID, FileVault keys, boot integrity.</li>
            <li><b>Find My / Activation Lock</b> — anti-theft tying device to Apple ID.</li>
            <li><b>iCloud Keychain</b> — synced password manager across Apple devices.</li>
          </ul>

          <h3>Keyboard shortcuts (exam-favored)</h3>
          <ul>
            <li><b>Cmd+Space</b> — Spotlight.</li>
            <li><b>Cmd+Tab</b> — app switcher.</li>
            <li><b>Cmd+Q</b> — quit app (vs Cmd+W which only closes window).</li>
            <li><b>Cmd+Opt+Esc</b> — Force Quit Applications.</li>
            <li><b>Cmd+Shift+3</b> — full-screen screenshot.</li>
            <li><b>Cmd+Shift+4</b> — region screenshot.</li>
            <li><b>Cmd+Shift+5</b> — screenshot toolbar / screen recording.</li>
            <li><b>Ctrl+Cmd+Q</b> — lock screen.</li>
            <li><b>Cmd+,</b> — preferences in any app.</li>
            <li><b>Cmd+Shift+G</b> in Finder — "Go to folder" dialog.</li>
          </ul>

          <h3>Common file paths</h3>
          <ul>
            <li><code>/Applications</code> — installed apps.</li>
            <li><code>/Users/&lt;name&gt;</code> — home dir. Aliased as <code>~</code>.</li>
            <li><code>~/Library</code> (hidden) — per-user app data. Show with Cmd+Shift+. or <code>chflags nohidden ~/Library</code>.</li>
            <li><code>/Library</code> — system-wide app data.</li>
            <li><code>/System</code> — Apple system files (protected by SIP).</li>
            <li><code>/private/etc</code> → <code>/etc</code> — UNIX config files.</li>
            <li><code>/Volumes</code> — mounted disks.</li>
          </ul>

          <h2>Linux overview</h2>
          <p><b>Linux</b> is a family of open-source UNIX-like operating systems built around the Linux kernel. Common distributions:</p>
          <ul>
            <li><b>Debian / Ubuntu / Mint / Pop!_OS</b> — Debian family. Use <b>apt</b> + .deb packages.</li>
            <li><b>RHEL / Fedora / CentOS Stream / Rocky / AlmaLinux</b> — Red Hat family. Use <b>dnf</b> (or older <b>yum</b>) + .rpm.</li>
            <li><b>Arch / Manjaro</b> — rolling release, <b>pacman</b>.</li>
            <li><b>openSUSE</b> — <b>zypper</b>.</li>
            <li><b>Alpine</b> — minimal, used in containers, <b>apk</b>.</li>
          </ul>

          <h3>Filesystem Hierarchy Standard (FHS)</h3>
          <ul>
            <li><code>/</code> — root of everything.</li>
            <li><code>/bin</code>, <code>/sbin</code>, <code>/usr/bin</code>, <code>/usr/sbin</code> — executables.</li>
            <li><code>/etc</code> — config files.</li>
            <li><code>/home/&lt;user&gt;</code> — user home.</li>
            <li><code>/root</code> — root user's home (NOT the same as /).</li>
            <li><code>/var</code> — variable data: <code>/var/log</code> (logs), <code>/var/spool</code>, <code>/var/cache</code>.</li>
            <li><code>/tmp</code> — ephemeral, cleared on reboot.</li>
            <li><code>/opt</code> — optional third-party packages.</li>
            <li><code>/proc</code>, <code>/sys</code> — virtual filesystems exposing kernel + hardware info.</li>
            <li><code>/dev</code> — device nodes (<code>/dev/sda</code>, <code>/dev/null</code>).</li>
            <li><code>/mnt</code>, <code>/media</code> — mount points for removable + temp media.</li>
          </ul>

          <h3>Essential CLI commands</h3>
          <pre><code># Navigation + listing
pwd                          # working dir
ls -la                       # long + hidden
cd /etc
cd -                         # previous dir
tree /etc/network            # tree view

# File ops
cp -r src dst                # copy recursive
mv old new                   # move / rename
rm -rf dir                   # recursive force delete (DANGER)
touch file                   # create empty file
mkdir -p a/b/c               # make dirs incl parents
ln -s target link            # symbolic link

# View + search
cat file                     # print to stdout
less file                    # pager (q to quit)
head -n 20 file
tail -f /var/log/syslog      # follow live
grep -i "error" file         # case-insensitive search
grep -r "pattern" /etc       # recursive
find / -name "*.conf" 2>/dev/null
find /var -mtime -1          # modified within 24h
locate filename              # uses updatedb index

# Permissions + ownership
chmod 755 script.sh          # rwx r-x r-x
chmod u+x file               # add execute to owner
chown alice:devs file        # change owner + group
chgrp staff file
getfacl / setfacl            # POSIX ACLs

# Users + groups
whoami
id                           # uid, gid, groups
sudo -i                      # interactive root shell
useradd -m -s /bin/bash alice
passwd alice
usermod -aG sudo alice       # append to sudo group (Debian/Ubuntu)
usermod -aG wheel alice      # RHEL/Fedora equivalent
groupadd devs
userdel -r alice             # delete user + home

# Processes + jobs
ps aux                       # snapshot of all
ps -ef
top                          # live, interactive
htop                         # nicer top (often must be installed)
kill -9 PID                  # SIGKILL
pkill -f pattern             # kill by name regex
jobs / bg / fg
nohup cmd &                  # run + survive logout

# Disk + filesystems
df -h                        # filesystem usage
du -sh /var/log              # dir size summary
lsblk                        # tree of block devices
mount /dev/sdb1 /mnt/data
umount /mnt/data
fsck /dev/sda1               # filesystem check (UNMOUNTED!)
mkfs.ext4 /dev/sdb1          # format
lsof | grep deleted          # find deleted files held open

# Networking
ip a                         # interfaces (replaces ifconfig)
ip route
ip link set eth0 up
ss -tunlp                    # listening sockets (replaces netstat)
ping host
traceroute host
mtr host                     # combined live ping + traceroute
dig host                     # DNS query
host host                    # short DNS
curl -I https://example.com
wget https://example.com/file
nmcli device status          # NetworkManager

# Package mgmt
sudo apt update && sudo apt upgrade -y     # Debian/Ubuntu
sudo apt install nginx
sudo apt remove nginx
dpkg -l | grep nginx
sudo dnf install httpd                     # RHEL/Fedora
sudo dnf update
rpm -qa | grep httpd

# Service control (systemd)
systemctl status sshd
systemctl start sshd
systemctl stop sshd
systemctl restart sshd
systemctl reload sshd        # reload config without dropping connections
systemctl enable sshd        # start at boot
systemctl disable sshd
systemctl list-units --type=service
journalctl -u sshd -f        # follow log for one service
journalctl --since "1 hour ago"

# Shutdown / reboot
sudo shutdown -h now
sudo reboot
uptime</code></pre>

          <h3>Editors</h3>
          <ul>
            <li><b>nano</b> — beginner-friendly modeless editor.</li>
            <li><b>vi / vim</b> — modal; ubiquitous on servers. Esc → :wq save+quit, :q! quit no save.</li>
            <li><b>emacs</b> — heavyweight extensible editor.</li>
          </ul>

          <h3>Logs to check on Linux</h3>
          <ul>
            <li><b>systemd journal</b> — <code>journalctl -xe</code> for recent + tagged errors.</li>
            <li><code>/var/log/syslog</code> or <code>/var/log/messages</code> — general system log.</li>
            <li><code>/var/log/auth.log</code> (Debian) / <code>/var/log/secure</code> (RHEL) — sudo, SSH, PAM events.</li>
            <li><code>/var/log/dmesg</code> — kernel boot messages.</li>
            <li>Service-specific: <code>/var/log/nginx/</code>, <code>/var/log/mysql/</code>, etc.</li>
          </ul>

          <h3>SSH essentials</h3>
          <pre><code>ssh user@host                     # connect
ssh -p 2222 user@host
ssh-keygen -t ed25519             # generate key pair
ssh-copy-id user@host             # push public key into ~/.ssh/authorized_keys
scp file user@host:/path/         # copy via SSH
rsync -av src/ user@host:/dst/    # smart sync</code></pre>

          <h2>cmd-style → POSIX cheat sheet</h2>
          <table style="width:100%;font-size:13px;border-collapse:collapse">
            <tr><th align="left" style="padding:4px;border-bottom:1px solid #444">Windows cmd</th><th align="left" style="padding:4px;border-bottom:1px solid #444">macOS / Linux</th><th align="left" style="padding:4px;border-bottom:1px solid #444">Purpose</th></tr>
            <tr><td>dir</td><td>ls -la</td><td>List directory</td></tr>
            <tr><td>cd</td><td>cd</td><td>Change directory</td></tr>
            <tr><td>cls</td><td>clear</td><td>Clear screen</td></tr>
            <tr><td>type file</td><td>cat file</td><td>Show file</td></tr>
            <tr><td>copy / xcopy</td><td>cp</td><td>Copy file</td></tr>
            <tr><td>move</td><td>mv</td><td>Move / rename</td></tr>
            <tr><td>del</td><td>rm</td><td>Delete file</td></tr>
            <tr><td>md / rd</td><td>mkdir / rmdir</td><td>Make / remove dir</td></tr>
            <tr><td>tasklist / taskkill</td><td>ps / kill</td><td>List / kill process</td></tr>
            <tr><td>shutdown /r</td><td>shutdown -r now / reboot</td><td>Reboot</td></tr>
            <tr><td>ipconfig</td><td>ifconfig / ip a</td><td>NIC info</td></tr>
            <tr><td>tracert</td><td>traceroute</td><td>Trace route</td></tr>
            <tr><td>net user</td><td>useradd / passwd</td><td>User mgmt</td></tr>
          </table>

          <h2>Exam tips</h2>
          <ul>
            <li>"macOS full-disk encryption" → FileVault.</li>
            <li>"macOS Time Machine" → backup.</li>
            <li>"Force quit macOS app shortcut" → Cmd+Opt+Esc.</li>
            <li>"List processes interactively on Linux" → top (or htop).</li>
            <li>"Linux package install Debian/Ubuntu" → apt; "RHEL/Fedora" → dnf (yum legacy).</li>
            <li>"Show systemd service status" → systemctl status &lt;name&gt;.</li>
            <li>"View live service logs" → journalctl -u &lt;name&gt; -f.</li>
            <li>"Add Linux user to sudo group keeping existing groups" → usermod -aG sudo user (the -a is critical).</li>
            <li>"Generate strong SSH key" → ssh-keygen -t ed25519.</li>
          </ul>
        `
      },
      {
        title: '4. Malware Types',
        body: `
          <p><b>Malware</b> = MALicious softWARE — any code crafted to harm, surveil, or extract value from a system or user. Exam expects you to recognize each category by its <i>behavior</i> + <i>delivery</i>, not by name alone. Same payload can be packaged as virus + trojan + ransomware simultaneously.</p>

          <h2>Virus</h2>
          <p><b>What:</b> Code that attaches itself (infects) to a host file, document, or executable. Requires user action — opening the host — to run.</p>
          <p><b>Why:</b> Historically spread via floppy disks, then email attachments. Less common today than worms + trojans because user interaction is required.</p>
          <p><b>How used by attackers:</b> Macro virus in Office docs (VBA), executable file infectors, script viruses. The host file CARRIES the virus around.</p>
          <p><b>Defenses:</b> AV signature + behavior scanning, disable Office macros from the Internet, file reputation.</p>

          <h2>Worm</h2>
          <p><b>What:</b> Self-replicating malware that spreads across a network WITHOUT user interaction or host file. Exploits a vulnerability to copy itself to the next victim automatically.</p>
          <p><b>Famous examples:</b> Code Red, SQL Slammer, Conficker, NotPetya (delivered via supply chain + EternalBlue worming).</p>
          <p><b>Why dangerous:</b> Exponential spread within minutes. Saturates bandwidth + brings down servers.</p>
          <p><b>Defenses:</b> Patch promptly, segment networks (microsegmentation, VLANs), disable unused services, IPS signatures.</p>

          <h2>Trojan (Trojan Horse)</h2>
          <p><b>What:</b> Malware disguised as legitimate software. User installs it voluntarily, thinking it's a useful tool / cracked game / fake AV.</p>
          <p><b>Why:</b> Bypasses signature defenses that watch for binary patterns — humans run the file willingly.</p>
          <p><b>How used:</b> Fake installers, "free" warez, malvertising downloads, cracked software, fake codec packs.</p>
          <p><b>Defenses:</b> Only install from trusted sources / vendor sites, application allowlisting (AppLocker / WDAC), reputation services (SmartScreen, Gatekeeper, Notarization).</p>

          <h2>RAT — Remote Access Trojan</h2>
          <p><b>What:</b> Trojan that opens a remote-control backdoor for the attacker. Often runs as a persistent service.</p>
          <p><b>Examples:</b> DarkComet, njRAT, Quasar, Cobalt Strike beacon, Sliver implant.</p>
          <p><b>Capabilities:</b> File transfer, screen capture, webcam + mic access, keylogging, registry edits, lateral movement.</p>
          <p><b>Defenses:</b> EDR behavior detection, network egress filtering, application allowlisting, separation of admin accounts, hunt for beaconing patterns.</p>

          <h2>Rootkit</h2>
          <p><b>What:</b> Malware that hides itself + other malware deeply in the OS, often at <b>kernel</b>, <b>firmware</b>, or <b>bootloader</b> level. Subverts OS APIs so processes, files, registry keys look invisible.</p>
          <p><b>Variants:</b> Kernel-mode (driver), user-mode, <b>bootkit</b> (infects bootloader / MBR / VBR), <b>firmware rootkit</b> (UEFI / system management mode).</p>
          <p><b>Why scary:</b> Even AV running on the same OS can't see it. Removal often requires offline scanning, full reinstall, sometimes BIOS reflash.</p>
          <p><b>Defenses:</b> <b>Secure Boot</b> + TPM measured boot + <b>Boot Guard</b>, signed drivers, kernel mode integrity (HVCI / Memory Integrity), offline scanning, EDR with kernel telemetry.</p>

          <h2>Ransomware</h2>
          <p><b>What:</b> Encrypts files (or whole disk) and demands payment (typically cryptocurrency) for the decryption key.</p>
          <p><b>Variants:</b></p>
          <ul>
            <li><b>Crypto-ransomware</b> — encrypts files, leaves system bootable. WannaCry, Ryuk, LockBit, Conti.</li>
            <li><b>Locker</b> — locks the screen without encryption. Mostly older variants.</li>
            <li><b>Double-extortion</b> — exfiltrates data BEFORE encrypting, threatens public release if unpaid.</li>
            <li><b>Triple-extortion</b> — adds DDoS / customer pressure.</li>
            <li><b>RaaS</b> (Ransomware as a Service) — affiliates buy access to ransomware kit from operators for a cut.</li>
          </ul>
          <p><b>Defenses:</b> Immutable / air-gapped backups (3-2-1 rule), MFA on remote access (RDP, VPN), segmentation, EDR + canary file detection, patch the entry vectors (RDP, VPN, public-facing apps), least-privilege account hygiene, exercise restores regularly.</p>

          <h2>Keylogger</h2>
          <p><b>What:</b> Records keystrokes (and often clipboard, screenshots, form fills).</p>
          <p><b>Forms:</b></p>
          <ul>
            <li><b>Software keylogger</b> — hooks the OS keyboard API.</li>
            <li><b>Hardware keylogger</b> — physical USB / PS-2 inline device, no software footprint. Found by physical inspection.</li>
            <li><b>Kernel-mode keylogger</b> — embedded in driver.</li>
            <li><b>Form-grabbing</b> — captures browser HTTP POST data before TLS encryption.</li>
          </ul>
          <p><b>Why:</b> Steal passwords, banking credentials, MFA backup codes typed in.</p>
          <p><b>Defenses:</b> Hardware MFA (FIDO2 / YubiKey), password manager autofill (not typing), EDR, physical inspection of public/shared workstations, on-screen virtual keyboards for one-off banking.</p>

          <h2>Spyware</h2>
          <p><b>What:</b> Covertly collects user activity — browsing, location, contacts, files — and sends it to a third party.</p>
          <p><b>Examples:</b> Stalkerware on phones (mSpy), commercial surveillance (Pegasus on iPhones), bundled bloatware adware.</p>
          <p><b>Defenses:</b> Anti-spyware scans, careful permission grants on mobile, MDM, OS-level "Tracking Transparency" controls.</p>

          <h2>Adware</h2>
          <p><b>What:</b> Pushes ads — pop-ups, browser injections, redirects.</p>
          <p><b>Why:</b> Revenue for adware author. Some adware crosses the line into tracking / spyware.</p>
          <p><b>Defenses:</b> Browser extensions (uBlock Origin), DNS filtering, remove unwanted programs, careful installer "express" vs "custom" choices.</p>

          <h2>Cryptominer / Cryptojacker</h2>
          <p><b>What:</b> Hijacks CPU / GPU cycles to mine cryptocurrency for the attacker. Browser-based (Coinhive style) or installed.</p>
          <p><b>Symptoms:</b> Fans constantly maxed, CPU 100% even when idle, electric bill spike, throttled cloud VM bills (high cloud cost is the big tell in cloud breaches).</p>
          <p><b>Defenses:</b> EDR, browser extensions that block cryptomining scripts, cloud cost-anomaly alerts, restrict outbound to known mining pools.</p>

          <h2>Boot sector / Bootkit</h2>
          <p><b>What:</b> Infects the <b>MBR</b> (Master Boot Record), <b>VBR</b> (Volume Boot Record), or modern UEFI boot manager so malware loads BEFORE the OS — and thus before AV.</p>
          <p><b>Defenses:</b> UEFI <b>Secure Boot</b>, TPM-measured boot, drive encryption, AV with offline scan capability, recovery media to repair (<code>bootrec /fixmbr</code>, <code>bootrec /rebuildbcd</code>).</p>

          <h2>Logic bomb</h2>
          <p><b>What:</b> Dormant code that triggers on a condition — date, file presence, user logon, employee removal from AD.</p>
          <p><b>Why:</b> Insider sabotage, time-delayed disruption.</p>
          <p><b>Defenses:</b> Code review, separation of duties, monitoring for unauthorized scheduled tasks / cron jobs, careful offboarding.</p>

          <h2>Backdoor</h2>
          <p><b>What:</b> Hidden access path bypassing normal auth. Sometimes intentional (vendor "support" account), often planted by attackers post-compromise.</p>
          <p><b>Defenses:</b> Hunt for unauthorized accounts / SSH keys / scheduled tasks, integrity monitoring (Tripwire, AIDE), config baselining, EDR.</p>

          <h2>Fileless malware</h2>
          <p><b>What:</b> Lives in memory / leverages legitimate tools (PowerShell, WMI, mshta, rundll32) — does not drop traditional executable files on disk.</p>
          <p><b>Why:</b> Signature-based AV doesn't see anything. "Living-off-the-land" binaries (<b>LOLBins</b>) are abused.</p>
          <p><b>Defenses:</b> PowerShell logging + constrained language mode, AMSI integration with AV, EDR behavior detection, application allowlisting.</p>

          <h2>Botnet</h2>
          <p><b>What:</b> Network of compromised hosts (zombies) under a single command-and-control (<b>C2</b>) operator. Used for DDoS, spam, credential stuffing, click fraud, mining.</p>
          <p><b>Examples:</b> Mirai (IoT), Emotet, Conficker, TrickBot.</p>
          <p><b>Defenses:</b> Egress filtering to known C2 IPs, EDR + IPS signatures, removal of default credentials on IoT, ISP-side mitigation.</p>

          <h2>PUP / PUA</h2>
          <p><b>PUP</b> (Potentially Unwanted Program) / <b>PUA</b> (Potentially Unwanted Application) — bundled toolbars, "system optimizers", changed homepages. Not strictly malware but degrade the system and often act as adware/spyware.</p>

          <h2>Anti-malware tooling categories</h2>
          <ul>
            <li><b>AV</b> (Antivirus) — signature + heuristic file scanning.</li>
            <li><b>EDR</b> (Endpoint Detection &amp; Response) — behavior monitoring + investigation + remote response. Modern replacement / complement to AV.</li>
            <li><b>XDR</b> (Extended Detection &amp; Response) — correlates endpoint + network + identity + cloud signals.</li>
            <li><b>NGAV</b> (Next-Generation AV) — ML / behavior, no signatures.</li>
            <li><b>MDR</b> (Managed Detection &amp; Response) — outsourced 24/7 SOC.</li>
            <li><b>Sandbox / detonation</b> — run unknown file in isolated VM, observe behavior.</li>
            <li><b>SIEM</b> + <b>SOAR</b> — log aggregation + automated response.</li>
            <li><b>IOC</b> (Indicator of Compromise) — hash, IP, domain, registry key associated with known badness.</li>
            <li><b>TTPs</b> (Tactics, Techniques, Procedures) — MITRE ATT&amp;CK mapping of adversary behavior.</li>
          </ul>

          <h2>CompTIA 7-step malware removal process (memorize order)</h2>
          <ol>
            <li><b>Investigate and verify malware symptoms.</b></li>
            <li><b>Quarantine</b> infected systems (network isolation).</li>
            <li><b>Disable System Restore</b> in Windows so the malware can't be re-introduced from a tainted restore point.</li>
            <li><b>Remediate</b> — update AV definitions + scan + remove. Use offline / safe-mode scans if active.</li>
            <li><b>Schedule</b> regular scans + updates going forward.</li>
            <li><b>Re-enable System Restore</b> + create a fresh, clean restore point.</li>
            <li><b>Educate</b> the end user on how the infection happened + how to avoid it.</li>
          </ol>

          <h2>Detection signs</h2>
          <ul>
            <li>Unexpected pop-ups, browser redirects, changed homepage.</li>
            <li>Sluggish performance, fans constantly running.</li>
            <li>Disk thrash without user activity.</li>
            <li>New unknown processes / services / scheduled tasks.</li>
            <li>Unusual outbound traffic (beaconing, large uploads).</li>
            <li>Disabled AV / firewall / Windows Update.</li>
            <li>Encrypted files with strange extensions + ransom note.</li>
            <li>Logon failures from unfamiliar IPs (post-credential theft).</li>
          </ul>

          <h2>Exam tips</h2>
          <ul>
            <li>"Self-replicating across the network without user action" → worm.</li>
            <li>"Disguised as legit software" → trojan.</li>
            <li>"Remote backdoor control" → RAT.</li>
            <li>"Hides at kernel / firmware level" → rootkit.</li>
            <li>"Encrypts files + ransom" → ransomware.</li>
            <li>"Records keystrokes" → keylogger.</li>
            <li>"100% CPU + electric bill spike" → cryptominer.</li>
            <li>"Triggers on a condition (date, fired employee)" → logic bomb.</li>
            <li>"Lives in RAM / uses PowerShell + WMI" → fileless malware.</li>
            <li>CompTIA 7-step removal — order is exam-critical.</li>
          </ul>
        `
      },
      {
        title: '5. Social Engineering',
        body: `
          <p><b>Social engineering</b> = exploiting human trust + behavior instead of code vulnerabilities. Cheaper than 0-days, works against every org regardless of tech stack. Most breaches today start here. Exam tests identification of the technique + the right countermeasure.</p>

          <h2>Psychological principles attackers exploit</h2>
          <p>Robert Cialdini's "Influence" pillars summarize most attacks:</p>
          <ul>
            <li><b>Authority</b> — pretending to be a boss, IT, vendor, government, police.</li>
            <li><b>Urgency / Scarcity</b> — "act NOW", "only 5 minutes left", deadlines.</li>
            <li><b>Social proof</b> — "everyone in your department already did this".</li>
            <li><b>Liking</b> — built rapport, common interest, attractive caller.</li>
            <li><b>Reciprocity</b> — "I helped you, now you owe me".</li>
            <li><b>Commitment / consistency</b> — small "yes" leads to big "yes".</li>
            <li><b>Fear</b> — threats of account closure, legal action, virus infection.</li>
            <li><b>Trust</b> — leveraging brand, badge, uniform.</li>
          </ul>

          <h2>Phishing</h2>
          <p><b>What:</b> Mass-distributed email pretending to be a legitimate brand (bank, Microsoft, FedEx) to lure users into clicking malicious links or opening attachments.</p>
          <p><b>Why effective:</b> Volume. Even a 0.1% click rate on millions of emails yields thousands of victims.</p>
          <p><b>How used:</b> Credential harvesting (fake login page), malware drop, business intel reconnaissance.</p>
          <p><b>Defenses:</b> Email security gateways (Mimecast, Proofpoint, Defender for Office), <b>SPF</b> / <b>DKIM</b> / <b>DMARC</b> record alignment, link rewriting + sandbox detonation, user training, MFA, browser safe browsing, report-phish button.</p>

          <h3>Email auth acronyms</h3>
          <ul>
            <li><b>SPF</b> (Sender Policy Framework) — DNS TXT listing IPs allowed to send for a domain.</li>
            <li><b>DKIM</b> (DomainKeys Identified Mail) — public-key signature in DNS that verifies email content + sender.</li>
            <li><b>DMARC</b> (Domain-based Message Authentication, Reporting &amp; Conformance) — policy telling receivers what to do (none / quarantine / reject) when SPF / DKIM fail. Sends aggregate + forensic reports.</li>
          </ul>

          <h2>Spear phishing</h2>
          <p><b>What:</b> Targeted phishing crafted for a specific individual or small group. Uses real names, projects, internal jargon scraped from LinkedIn / leaks / social media.</p>
          <p><b>Why scary:</b> Much higher click rate. Attackers spend hours on recon.</p>
          <p><b>Defenses:</b> Same as phishing + heightened scrutiny of HR / finance / executive assistants who hold sensitive workflows.</p>

          <h2>Whaling (BEC)</h2>
          <p><b>What:</b> Spear phishing aimed at executives / C-suite / partners with payment authority. Also called <b>BEC</b> (Business Email Compromise) when the goal is wire-fraud authorization.</p>
          <p><b>Common BEC patterns:</b></p>
          <ul>
            <li>"CEO" emails AP / finance asking for urgent wire transfer.</li>
            <li>"Vendor" emails accounts payable with updated bank details (vendor email compromise).</li>
            <li>"HR" requests employee W-2 / payroll info.</li>
          </ul>
          <p><b>Defenses:</b> Out-of-band verification (call known number) for any payment / banking change, separation of duties on wire requests, signed approval workflow, finance training, anti-spoofing on org domain (DMARC reject).</p>

          <h2>Vishing — Voice phishing</h2>
          <p><b>What:</b> Phishing by phone call. Caller pretends to be IT, bank fraud dept, IRS, Microsoft support, etc.</p>
          <p><b>How:</b> VoIP makes caller-ID spoofing easy. AI voice cloning now allows "boss" impersonation from seconds of public speech.</p>
          <p><b>Defenses:</b> Verify by calling back on a number you trust (NOT the one given), require ticket numbers, never share password / OTP / MFA code by phone, training to recognize urgency + authority patterns.</p>

          <h2>Smishing — SMS phishing</h2>
          <p><b>What:</b> Phishing via SMS / iMessage / WhatsApp. Common lures: "package delivery failed", "bank fraud alert", "USPS reschedule".</p>
          <p><b>Defenses:</b> Don't click links in unsolicited texts, verify by visiting site directly, carrier spam filters, OS spam detection (iOS Filter Unknown Senders).</p>

          <h2>Pharming</h2>
          <p><b>What:</b> Redirects users to a fake site at the DNS layer — without needing them to click a phishing link. Achieved via DNS cache poisoning, malicious DNS server, hosts file manipulation, or router compromise.</p>
          <p><b>Defenses:</b> DNSSEC, DoH / DoT (encrypted DNS), monitor for changes to local hosts file, secure DNS resolver, browser cert warnings.</p>

          <h2>Tailgating / Piggybacking</h2>
          <p><b>What:</b> Attacker physically follows an authorized person through a badge-controlled door without scanning. <b>Piggybacking</b> = authorized person knowingly allows it.</p>
          <p><b>Defenses:</b> Access-control vestibules / mantraps, security guards, badge-required turnstiles, signage + culture ("badge in or escort"), CCTV review, social-policy training.</p>

          <h2>Shoulder surfing</h2>
          <p><b>What:</b> Watching the screen / keyboard / PIN pad to capture credentials or sensitive data. Done in person, via cameras, or even smartphones in public.</p>
          <p><b>Defenses:</b> Privacy screen filters (polarized films), auto-lock with short timeout, screen positioning away from foot traffic, awareness in cafes / airports.</p>

          <h2>Pretexting</h2>
          <p><b>What:</b> Invented scenario / persona to extract info or access. "I'm from corporate IT calling about your VPN issue, I just need to verify your password to reset it." "I'm an auditor from HQ, can you let me into the server room."</p>
          <p><b>Defenses:</b> Verification protocols (callback, ticket required), "never give passwords" policy, role-play training, document handling rules, escort policies.</p>

          <h2>Impersonation</h2>
          <p><b>What:</b> Posing as someone else — IT tech, delivery driver, utility worker, fellow employee. Often combined with pretexting.</p>
          <p><b>Defenses:</b> Visitor logs, escort policies, badge requirements, photo ID on all employee badges, vendor pre-registration.</p>

          <h2>Quid pro quo</h2>
          <p><b>What:</b> "Something for something." Attacker offers a benefit (free tech support, gift card, software) in exchange for credentials / access.</p>
          <p><b>Defenses:</b> Awareness training, suspicious of unsolicited offers, mandatory reporting of bribes.</p>

          <h2>Baiting</h2>
          <p><b>What:</b> Drops physical media (USB sticks, CDs) in parking lots / lobbies marked "Salary 2026" or "Layoff list". Curiosity drives victim to plug it into work PC, executing malware.</p>
          <p><b>Defenses:</b> Disable AutoRun, USB device control (allow only registered IDs), endpoint AV, training, locked-down kiosk standard for "found media" inspection.</p>

          <h2>Dumpster diving</h2>
          <p><b>What:</b> Physical search of trash / recycling for sensitive printouts, sticky notes, hard drives, badges.</p>
          <p><b>Defenses:</b> Shred-bin policy + cross-cut shredders, locked dumpsters, secure media destruction (NIST SP 800-88), end-of-life device wipe / destroy chain of custody.</p>

          <h2>Watering hole attack</h2>
          <p><b>What:</b> Compromise a website that a target group frequently visits (industry forum, vendor portal) and use it to serve malware. Indirect.</p>
          <p><b>Defenses:</b> EDR, browser sandbox, NoScript / content filtering, patched browser + OS, segmented browsing VM for risky sites.</p>

          <h2>Typosquatting + homoglyph attacks</h2>
          <p><b>What:</b> Register lookalike domains — <code>microsoft.com</code> vs <code>rnicrosoft.com</code> (rn looks like m), <code>paypa1.com</code>, <code>g00gle.com</code>. Or Unicode homoglyphs from Cyrillic alphabet (а vs a).</p>
          <p><b>Defenses:</b> DNS filtering, browser URL inspection, defensive domain registration of common typos, hover-to-preview link.</p>

          <h2>Evil twin</h2>
          <p><b>What:</b> Rogue Wi-Fi access point broadcasting the same SSID as a trusted network (corporate Wi-Fi, "Free Airport WiFi"). Captures credentials + traffic.</p>
          <p><b>Defenses:</b> WPA2/3-Enterprise with server cert validation, MDM-pushed Wi-Fi profile (so clients verify the RADIUS cert), WIPS (Wireless Intrusion Prevention) flagging rogue APs, VPN always-on, user training about "Free WiFi".</p>

          <h2>Eavesdropping</h2>
          <p><b>What:</b> Listening to private conversations in person (open offices, restaurants) or via compromised devices.</p>
          <p><b>Defenses:</b> Private rooms for sensitive discussion, mute on conferences when not speaking, avoid sensitive talk in public, MDM device management.</p>

          <h2>Hoax</h2>
          <p><b>What:</b> Fake virus warnings / chain emails urging users to forward / take action. Wastes time + may push them to disable real security.</p>
          <p><b>Defenses:</b> Verify with IT before forwarding, snopes.com check, security awareness.</p>

          <h2>Influence campaign + disinformation</h2>
          <p><b>What:</b> Coordinated false content to shape opinion / damage reputation. Often nation-state.</p>
          <p><b>Defenses:</b> Brand monitoring, takedown processes, trusted communication channels, executive social media security.</p>

          <h2>Layered defenses against social engineering</h2>
          <ol>
            <li><b>Awareness training</b> — short, frequent, scenario-based.</li>
            <li><b>Phishing simulations</b> — KnowBe4, Cofense, Microsoft Attack Simulator.</li>
            <li><b>Reporting culture</b> — easy "Report Phish" button + no blame for reporting.</li>
            <li><b>Email auth</b> — SPF + DKIM + DMARC enforcement.</li>
            <li><b>MFA / phishing-resistant MFA</b> — FIDO2 / WebAuthn keys defeat credential phishing.</li>
            <li><b>Conditional Access</b> — block sign-in from impossible-travel / risky devices.</li>
            <li><b>Network filtering</b> — DNS filter, URL filter, malware sandboxing.</li>
            <li><b>Privileged access</b> — separate admin accounts, PIM / just-in-time, MFA mandatory.</li>
            <li><b>Verification protocols</b> — out-of-band callback for any sensitive transaction.</li>
            <li><b>Physical controls</b> — badges, mantraps, visitor logs, escorts.</li>
            <li><b>Asset disposal</b> — shred + certified destruction of media.</li>
          </ol>

          <h2>Exam tips</h2>
          <ul>
            <li>Email lure targeting CFO for wire transfer → whaling / BEC.</li>
            <li>Phone caller pretending to be IT asking for password → vishing + pretexting.</li>
            <li>SMS "click here to reschedule package" → smishing.</li>
            <li>Following someone through a badge door → tailgating.</li>
            <li>Watching someone enter a PIN → shoulder surfing.</li>
            <li>USB sticks dropped in parking lot → baiting.</li>
            <li>Looking through trash for sensitive docs → dumpster diving.</li>
            <li>Rogue AP with same SSID as corporate → evil twin.</li>
            <li>Strongest defense against credential phishing → phishing-resistant MFA (FIDO2 / hardware key).</li>
          </ul>
        `
      },
      {
        title: '6. Windows Security Settings',
        body: `
          <p>Windows ships with layered security: user account isolation, disk encryption, file-system permissions, antivirus + firewall, exploit mitigations, and Microsoft Defender features. Exam tests how each layer works, where to configure it, and the rules for resolving conflicts.</p>

          <h2>UAC — User Account Control</h2>
          <p><b>What:</b> Windows feature that runs even administrators with a STANDARD-user token by default. When admin action is needed, the system prompts (consent or credentials) before <b>elevating</b> the token. Introduced in Vista; still the cornerstone of Windows privilege isolation.</p>
          <p><b>Why:</b> Stops malware running in your normal session from silently making system-wide changes. Forces a visible choice.</p>
          <p><b>Four notification levels</b> (Control Panel → User Accounts → Change UAC settings):</p>
          <ol>
            <li><b>Always notify</b> — desktop is "secure" (dimmed) for every prompt. Most secure.</li>
            <li><b>Notify when apps make changes (default)</b> — secure desktop for app prompts; user setting changes do not prompt.</li>
            <li>Notify when apps change, do NOT dim desktop — weaker, vulnerable to UI spoofing.</li>
            <li><b>Never notify</b> — effectively turns UAC off. Avoid.</li>
          </ol>
          <p><b>Standard vs admin token:</b> Even admin users get a stripped token at logon. UAC elevation provides a separate full-admin token only for the prompted process. Standard users see a credential prompt — must enter admin password.</p>
          <p><b>Group Policy:</b> <code>secpol.msc</code> → Local Policies → Security Options → "User Account Control: …".</p>

          <h2>BitLocker — drive encryption</h2>
          <p><b>What:</b> Full-volume encryption of Windows drives using AES (128 or 256-bit XTS).</p>
          <p><b>Why:</b> Stolen / lost laptop is unreadable without the key. Required for many compliance frameworks (HIPAA, PCI, GDPR, SOC 2).</p>
          <p><b>Editions:</b> Pro, Enterprise, Education. Home only supports "Device Encryption" (a stripped subset) on TPM + Microsoft-account systems.</p>
          <p><b>Key protectors (how the key unlocks the drive):</b></p>
          <ul>
            <li><b>TPM</b> only — drive auto-unlocks when booted on the same hardware. Default, transparent to user.</li>
            <li><b>TPM + PIN</b> — pre-boot PIN entered before Windows loads. Resists cold-boot + cloned hardware.</li>
            <li><b>TPM + USB startup key</b> — physical key required.</li>
            <li><b>USB-only</b> (no TPM) — used on older hardware. Less secure.</li>
            <li><b>Password</b> protector — data drives + BitLocker To Go.</li>
          </ul>
          <p><b>Recovery key</b> — 48-digit numeric key escrowed to AD, Entra ID, or Microsoft Account at enable time. Required if TPM doesn't match (BIOS change, hardware swap) or PIN forgotten.</p>
          <p><b>BitLocker To Go</b> — same tech for removable drives (USB, external HDD). Unlocks with password or smart card.</p>
          <p><b>Manage via:</b> <code>manage-bde</code> CLI or PowerShell <code>Get-BitLockerVolume</code> / <code>Enable-BitLocker</code>.</p>

          <h2>EFS — Encrypting File System</h2>
          <p><b>What:</b> NTFS-level encryption of individual files / folders using a per-user certificate.</p>
          <p><b>Why:</b> Lighter than BitLocker. Protects against other users on the SAME system.</p>
          <p><b>Caveats:</b> Doesn't survive copy to non-NTFS media (FAT, SMB share without compatible cipher). EFS cert loss = permanent data loss unless DRA (Data Recovery Agent) configured.</p>

          <h2>NTFS permissions</h2>
          <p><b>NTFS</b> (New Technology File System) controls who can do what to files + folders. ACL = Access Control List, made of ACEs (Access Control Entries).</p>
          <p><b>Standard permissions:</b></p>
          <ul>
            <li><b>Full Control</b> — read, write, change perms, take ownership.</li>
            <li><b>Modify</b> — read, write, delete; cannot change perms.</li>
            <li><b>Read &amp; Execute</b> — read + run executables.</li>
            <li><b>List Folder Contents</b> — applies only to folders, allows enumeration.</li>
            <li><b>Read</b> — view contents + attributes.</li>
            <li><b>Write</b> — create new files / folders, modify metadata.</li>
            <li><b>Special permissions</b> — fine-grained set (read attributes, write extended, delete subfolders, etc.) — viewable via Advanced.</li>
          </ul>
          <p><b>Inheritance:</b> Child objects inherit parent permissions unless explicitly broken ("Disable inheritance" in Advanced Security). Inherited entries can be converted to explicit or removed.</p>
          <p><b>Conflict resolution rules:</b></p>
          <ol>
            <li>Permissions from multiple groups are CUMULATIVE (union of Allows).</li>
            <li><b>Deny ALWAYS overrides Allow</b> — even an explicit Allow loses to an inherited Deny.</li>
            <li>Explicit permissions on the object override inherited ones.</li>
          </ol>
          <p><b>Tools:</b> Right-click → Properties → Security tab. CLI: <code>icacls</code>. PowerShell: <code>Get-Acl</code> / <code>Set-Acl</code>.</p>

          <h2>Share permissions vs NTFS permissions</h2>
          <p>When a folder is accessed over the network (SMB share), <b>both</b> permission sets evaluate. Effective permission = MOST RESTRICTIVE intersection.</p>
          <p><b>Common practice:</b> Share = "Everyone — Full Control" so it's not the constraint; rely on NTFS for actual control. Local access doesn't traverse share permissions at all.</p>

          <h2>Ownership</h2>
          <p>Every object has an <b>owner</b>. Owner can always modify the ACL even if all Allow ACEs are removed. Administrators can <b>take ownership</b> of any object to recover from misconfigurations (<code>takeown /f path /r</code>).</p>

          <h2>Microsoft Defender — built-in security stack</h2>
          <ul>
            <li><b>Microsoft Defender Antivirus</b> — real-time signature + behavior scanner. Cloud-delivered + tamper protection on by default.</li>
            <li><b>Microsoft Defender Firewall</b> — host-based stateful firewall. Profiles: Domain, Private, Public. Configure with <code>wf.msc</code>.</li>
            <li><b>SmartScreen</b> — browser + file reputation. Warns on unsafe downloads / phishing URLs.</li>
            <li><b>Defender Application Guard</b> — opens untrusted Edge sites / Office docs in Hyper-V container. Enterprise.</li>
            <li><b>Controlled Folder Access</b> — anti-ransomware that blocks unauthorized writes to documents.</li>
            <li><b>Tamper Protection</b> — prevents AV settings from being disabled by malware / scripts.</li>
            <li><b>Exploit Protection</b> — DEP, ASLR, CFG, mitigation policies. Configure under "App &amp; browser control → Exploit protection settings".</li>
            <li><b>Microsoft Defender for Endpoint (MDE)</b> — Enterprise EDR / XDR with cloud telemetry, attack surface reduction (ASR) rules, advanced hunting (KQL).</li>
            <li><b>Credential Guard</b> + <b>Device Guard</b> — VBS (Virtualization-Based Security) isolates LSASS so credentials are not memory-accessible. Defeats Mimikatz-style pass-the-hash.</li>
            <li><b>HVCI</b> (Hypervisor-protected Code Integrity / Memory Integrity) — kernel runs in a virtualized memory protection mode; blocks unsigned kernel code.</li>
            <li><b>Windows Hello</b> — biometric / PIN authentication using TPM-backed keys; enables passwordless sign-in.</li>
          </ul>

          <h2>Account + sign-in security</h2>
          <ul>
            <li><b>Local accounts</b> — stored in SAM. Use for offline / standalone.</li>
            <li><b>Microsoft Account (MSA)</b> — consumer cloud account for Windows.</li>
            <li><b>Microsoft Entra (Azure AD) joined</b> — workplace cloud identity. Conditional Access enforced.</li>
            <li><b>Domain account</b> — Active Directory.</li>
            <li><b>Hybrid joined</b> — both on-prem AD and Entra ID.</li>
            <li><b>Account Lockout Policy</b> — n bad attempts → lockout for x minutes. Configured under <code>secpol.msc</code> → Account Policies → Account Lockout Policy.</li>
            <li><b>Password policy</b> — minimum length, complexity, history, age. Modern NIST 800-63B guidance favors length + breached-password check over forced rotation.</li>
            <li><b>MFA</b> via Microsoft Authenticator, FIDO2 key, Windows Hello.</li>
            <li><b>LAPS</b> (Local Administrator Password Solution) — manages + rotates local admin passwords centrally. Now built into Entra ID + AD.</li>
          </ul>

          <h2>AutoRun / AutoPlay</h2>
          <p><b>What:</b> Historical Windows feature that auto-executed scripts/programs from inserted media. Disabled by default since Windows 7 for executables, still risky for AutoPlay handlers.</p>
          <p><b>Defense:</b> Group Policy "Turn off AutoPlay" on all drives. USB device-control software for enterprise.</p>

          <h2>Removable-media + USB control</h2>
          <ul>
            <li><b>Device Installation Restrictions</b> Group Policy — block install of unknown USB devices.</li>
            <li><b>BitLocker To Go</b> + force-encrypt removable drives.</li>
            <li><b>Defender for Endpoint Device Control</b> — read-only / blocked by device class or vendor ID.</li>
          </ul>

          <h2>Windows Update + security baselines</h2>
          <ul>
            <li><b>Cumulative updates</b> — monthly rollups (Patch Tuesday).</li>
            <li><b>Servicing channels</b> — GAC (consumer/business), LTSC (Enterprise long-term).</li>
            <li><b>Microsoft Security Baselines</b> — Microsoft-published Group Policy + Intune templates aligning with CIS / NIST. Apply via Security Compliance Toolkit.</li>
            <li><b>WSUS</b> / <b>WUfB</b> — on-prem / cloud-managed update deferrals.</li>
          </ul>

          <h2>Group Policy + Local Security Policy</h2>
          <ul>
            <li><b><code>gpedit.msc</code></b> — Local Group Policy Editor (Pro+).</li>
            <li><b><code>secpol.msc</code></b> — Local Security Policy — focused on account, audit, user-rights, security options.</li>
            <li><b>Domain GPOs</b> — pushed from AD via SYSVOL. Apply in <b>LSDOU</b> order: Local → Site → Domain → OU. Closer-to-user wins by default. <b>Enforced</b> and <b>Block Inheritance</b> flags adjust.</li>
            <li><b><code>gpresult /r</code></b> — show applied GPOs.</li>
            <li><b><code>gpupdate /force</code></b> — re-apply now.</li>
          </ul>

          <h2>Audit + logging</h2>
          <ul>
            <li><b>Event Viewer</b> (<code>eventvwr.msc</code>) — Application, System, Security, Setup logs.</li>
            <li><b>Common Security event IDs:</b>
              <ul>
                <li>4624 — successful logon.</li>
                <li>4625 — failed logon.</li>
                <li>4634 — logoff.</li>
                <li>4672 — special privileges assigned.</li>
                <li>4720 — user account created.</li>
                <li>4732 — user added to local group.</li>
                <li>4688 — process creation (if audit enabled).</li>
              </ul>
            </li>
            <li><b>Audit policy</b> via <code>secpol.msc</code> → Local Policies → Audit Policy (or Advanced Audit Policy Configuration).</li>
            <li><b>Forward logs</b> via <b>WEF</b> (Windows Event Forwarding) to SIEM.</li>
          </ul>

          <h2>Common security hardening checklist</h2>
          <ol>
            <li>Run latest Windows version + monthly patches.</li>
            <li>BitLocker on every drive.</li>
            <li>Standard user for daily work; separate admin account.</li>
            <li>UAC at default "Notify" or higher.</li>
            <li>Windows Hello / passwordless sign-in.</li>
            <li>Disable SMBv1.</li>
            <li>Disable AutoRun.</li>
            <li>Enable Defender real-time + cloud-delivered + Tamper Protection.</li>
            <li>Apply Microsoft Security Baselines.</li>
            <li>Configure Windows Firewall — allow only required inbound, drop unsolicited.</li>
            <li>For Enterprise: enable Credential Guard, HVCI, ASR rules, Controlled Folder Access.</li>
            <li>Log forwarding to SIEM, retain Security log appropriately.</li>
          </ol>

          <h2>Exam tips</h2>
          <ul>
            <li>"Most restrictive wins" when Share and NTFS conflict.</li>
            <li>"Deny ALWAYS overrides Allow" in NTFS.</li>
            <li>BitLocker uses TPM 2.0 (with optional PIN / USB).</li>
            <li>UAC prompts elevation, runs admins as standard by default.</li>
            <li>"VBS isolation of credentials" → Credential Guard.</li>
            <li>"Defender feature that opens untrusted sites in container" → Application Guard.</li>
            <li>"Rotates local admin passwords" → LAPS.</li>
            <li>"GPO precedence" → LSDOU (Local → Site → Domain → OU; OU is closest, applied last → wins).</li>
            <li>"Failed logon event ID" → 4625.</li>
          </ul>
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
      { q: 'A pod cannot reach an external API after a network policy was applied. The likely cause:', options: ['IAM permission missing', 'Network policy default-deny egress', 'Region outage', 'Image pull failure'], answer: 1, explain: 'NetworkPolicy with default-deny will block egress unless explicitly allowed.' },
      { q: 'Which cloud service is BEST for ad-hoc analytic queries on petabyte data?', options: ['Block storage', 'Cloud data warehouse (BigQuery, Redshift, Snowflake, Synapse)', 'Object lifecycle policy', 'CDN'], answer: 1, explain: 'Columnar warehouse + separation of compute/storage scales for analytical SQL.' },
      { q: 'Which scaling pattern is INAPPROPRIATE for a stateful relational database?', options: ['Scale up vertical', 'Read replicas', 'Horizontal sharding (with care)', 'Aggressive auto-scale add/remove primary instances'], answer: 3, explain: 'Primary DB instances don\'t fluidly scale horizontally on demand; storage and connections complicate it.' },
      { q: 'A serverless function has cold-start latency. Which mitigates?', options: ['Larger memory only', 'Provisioned concurrency / always-warm instances, smaller runtime, lighter dependencies', 'More regions', 'Disable function'], answer: 1, explain: 'Provisioned concurrency keeps warm pools. Slim runtimes (Go, Node) start fast.' },
      { q: 'A development team wants to test infra changes safely. Best practice?', options: ['Edit prod directly', 'Separate dev/staging/prod accounts or projects + IaC + automated tests', 'Manual ad-hoc clicks', 'No environments'], answer: 1, explain: 'Account/project isolation = blast-radius limit. IaC enables reproducible non-prod copies.' },
      { q: 'Which IaC pattern detects drift from desired state?', options: ['Never check', 'terraform plan / drift detection scans', 'Manual review only', 'Wait for outage'], answer: 1, explain: '`terraform plan` shows diff between code and live state. Provider drift-detection services also exist.' },
      { q: 'GitOps means:', options: ['Manual deploys', 'Git is source of truth; controller (ArgoCD/Flux) reconciles cluster to repo', 'CI only', 'No version control'], answer: 1, explain: 'GitOps = pull-based deployment. Cluster controllers continuously reconcile to git.' },
      { q: 'Which container image practice reduces attack surface?', options: ['Use largest base image', 'Distroless or minimal base + multi-stage builds + scan images for CVEs', 'Run as root', 'Include all tools'], answer: 1, explain: 'Minimal images = fewer CVEs. Multi-stage builds drop build tools from final image.' },
      { q: 'Cloud-native secret storage option?', options: ['Hardcoded env var in code', 'AWS Secrets Manager / Azure Key Vault / GCP Secret Manager with IAM-controlled access + rotation', 'Plaintext config files', 'Email secret'], answer: 1, explain: 'Managed secret services give versioning, rotation hooks, audit logs.' },
      { q: 'A high-traffic site needs static asset caching at edge worldwide. Service?', options: ['CDN (CloudFront, Front Door, Cloud CDN, Cloudflare)', 'Single origin server', 'Tape', 'FTP mirror'], answer: 0, explain: 'CDN caches near users for low latency + offloads origin.' },
      { q: 'A managed Kubernetes cluster shows pod evictions due to memory pressure. Quickest mitigation?', options: ['Delete deployment', 'Set proper requests/limits and add nodes or use cluster autoscaler', 'Disable monitoring', 'Reinstall cluster'], answer: 1, explain: 'Misconfigured requests cause overcommit. Right-size + autoscaler add capacity.' },
      { q: 'Identity federation between an enterprise IdP and cloud provider enables:', options: ['Local accounts only', 'SSO + short-lived role assumption — no long-lived cloud user keys', 'Slower auth', 'Loss of audit'], answer: 1, explain: 'Federation = enterprise identity → cloud role via STS / OIDC. Eliminates stored access keys.' },
      { q: 'Lift-and-shift migration means:', options: ['Refactor for cloud-native', 'Move workloads as-is to cloud VMs first; optimize later', 'Throw away apps', 'Build new system'], answer: 1, explain: 'Rehost (lift-shift) is the fastest cloud migration path. Refactor follows over time.' },
      { q: 'Best practice for cross-account IAM access?', options: ['Share root credentials', 'Cross-account roles with external ID + least-privilege policy', 'Email keys', 'Public IAM'], answer: 1, explain: 'AssumeRole + external ID prevents confused-deputy. Scope role permissions tightly.' },
      { q: 'Which Kubernetes object stores configuration data?', options: ['Secret (binary/sensitive)', 'ConfigMap', 'Deployment', 'Service'], answer: 1, explain: 'ConfigMap = key-value config. Secret similar but base64-encoded + RBAC-protected.' },
      { q: 'A workload needs guaranteed performance. Which storage tier?', options: ['HDD-backed cheap tier', 'Provisioned IOPS / Premium SSD tier with set throughput', 'Archive', 'Object storage only'], answer: 1, explain: 'Premium/Provisioned IOPS gives predictable IOPS and throughput SLAs.' },
      { q: 'Cloud BACKUP best practice should include:', options: ['Backups in same account/region as primary', 'Cross-region copies + immutable / object-lock + tested restores', 'No backups, HA covers it', 'Manual ad-hoc'], answer: 1, explain: 'Immutability + isolation defeats ransomware deletion. Restores must be regularly tested.' },
      { q: 'Difference between BC and DR plans?', options: ['Same', 'BC = whole business operations (people, process, comms); DR = IT systems recovery subset', 'DR is broader', 'BC = backups only'], answer: 1, explain: 'Business Continuity is broader. DR is the IT recovery slice.' },
      { q: 'Cloud cost anomaly detection flags 3x egress yesterday. Likely cause to check?', options: ['Just billing bug', 'Misconfigured backup, large data sync, exfiltration, runaway dev script — investigate via flow logs / CUR / Cost Mgmt', 'Cosmic ray', 'Time of day only'], answer: 1, explain: 'Sudden egress spikes are operational + security signals. Investigate before paying.' },
      { q: 'Which is a key SaaS security blind spot CASBs address?', options: ['Power supply', 'Shadow IT — unsanctioned SaaS apps with corporate data, plus DLP for sanctioned apps', 'Networking', 'BIOS'], answer: 1, explain: 'CASB discovers SaaS in use, enforces DLP / access controls, and integrates with IdP.' },
      { q: 'Stateful firewall rules in cloud security groups are written by:', options: ['VLAN ID', 'Direction (ingress/egress), protocol, port range, source/destination CIDR or SG ref', 'MAC address', 'Random'], answer: 1, explain: 'SGs match on protocol+port+source; cloud SGs are stateful so return traffic is auto-allowed.' },
      { q: 'PaaS scaling typically managed by:', options: ['Customer manually', 'Provider auto-scales based on metrics; customer sets min/max + tier', 'No scaling', 'Yearly review'], answer: 1, explain: 'App Service / Elastic Beanstalk scale tiers. Customer sets boundaries; provider handles instances.' },
      { q: 'Which AWS service is the metadata endpoint that can leak credentials via SSRF if IMDSv1 exposed?', options: ['169.254.169.254 (IMDS) — mitigate with IMDSv2 + token requirement', 'EBS endpoint', 'S3 only', 'STS'], answer: 0, explain: 'IMDSv2 requires a session token, blocking trivial SSRF credential theft.' },
      { q: 'Object storage signed URLs are used to:', options: ['Encrypt at rest', 'Grant time-limited access to a specific object without making it public', 'DDoS protect', 'Lifecycle archive'], answer: 1, explain: 'Pre-signed URLs let clients upload/download a specific resource for a window.' },
      { q: 'A cluster needs DNS-based service discovery. Provided by:', options: ['Manual hosts file', 'CoreDNS (Kubernetes default) / cloud-provider service DNS', 'Static IPs', 'Telnet'], answer: 1, explain: 'CoreDNS resolves <service>.<ns>.svc.cluster.local automatically.' },
      { q: 'Which cloud feature provides write-once-read-many (WORM) compliance for object storage?', options: ['Versioning only', 'Object Lock / Immutable Storage with retention period', 'Lifecycle delete', 'Encryption only'], answer: 1, explain: 'Object Lock prevents delete/overwrite for the retention duration. Required by some regulations.' },
      { q: 'Which is BEST for ETL between cloud services?', options: ['SSH copy manually', 'Managed services: AWS Glue, Azure Data Factory, GCP Dataflow', 'Email files', 'Disabled networking'], answer: 1, explain: 'Managed ETL/ELT handles scheduling, scaling, monitoring.' },
      { q: 'API Gateway primary roles?', options: ['Only logging', 'Authn/authz, rate limiting, request transformation, routing, caching', 'Storage', 'Email'], answer: 1, explain: 'API Gateway centralizes cross-cutting concerns for microservice APIs.' },
      { q: 'Which observability principle treats logs/metrics/traces as separate signals?', options: ['Single pane only', 'Three pillars of observability — combine for full system view', 'Metrics only', 'Logs only'], answer: 1, explain: 'Logs (events), Metrics (numerical), Traces (request flow) together. OpenTelemetry unifies.' },
      { q: 'Auto-scaling group can scale on:', options: ['Random', 'CPU, RAM, queue depth, custom CloudWatch/Azure Monitor metrics, schedule', 'Disk color', 'Calendar of holidays only'], answer: 1, explain: 'Scaling triggers can be reactive (metrics) or predictive (schedule).' },
      { q: 'Which cloud-native log routing service centralizes logs from many sources?', options: ['Manual SSH grep', 'CloudWatch Logs / Azure Monitor Logs (Log Analytics) / GCP Cloud Logging + OpenSearch/Sumo as targets', 'Telnet', 'Email digests'], answer: 1, explain: 'Cloud-native log services + downstream analytics platforms scale beyond ad-hoc tools.' },
      { q: 'A privileged action in cloud should require:', options: ['No approval', 'MFA + auditable approval + just-in-time elevation', 'Email request only', 'Background only'], answer: 1, explain: 'Just-in-time access (PIM, AWS IAM Identity Center sessions) reduces standing privilege.' },
      { q: 'Which compliance program is specific to US federal cloud workloads?', options: ['SOC 2', 'FedRAMP', 'ISO 27001', 'PCI-DSS'], answer: 1, explain: 'FedRAMP authorizes cloud providers for US federal use. SOC 2 is commercial assurance.' },
      { q: 'Hot/warm/cold/archive tier choice should follow:', options: ['Random', 'Access pattern: frequency, latency tolerance, retention. Lifecycle policies automate movement', 'Compression ratio', 'Color of data'], answer: 1, explain: 'Match data lifecycle to tier costs; auto-tier via policies.' },
      { q: 'A microservice goes into crash loop. Which observability signal is MOST useful first?', options: ['Disk percent', 'Pod logs + recent deployments + error rate metric on associated service', 'Power usage', 'Time of day'], answer: 1, explain: 'Logs reveal exception. Recent change is often the cause; correlate timing.' },
      { q: 'Which cloud database paradigm BEST handles flexible JSON documents?', options: ['Relational with strict schema', 'Document DB (MongoDB, DynamoDB, Cosmos DB)', 'Spreadsheet', 'CSV file'], answer: 1, explain: 'Document stores fit semi-structured JSON; trade some consistency for flexibility/scale.' }
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
      { q: 'Which entry conveys correct cost terminology?', options: ['CapEx = cloud, OpEx = on-prem', 'CapEx = up-front purchase, OpEx = pay-as-you-go', 'They mean the same thing', 'OpEx requires depreciation schedules'], answer: 1, explain: 'CapEx = capital expenditure (buy assets up-front). OpEx = operating expenditure (pay over time). Cloud is OpEx.' },
      { q: 'Azure scope hierarchy from broad to narrow?', options: ['Resource → RG → Sub → MG', 'Management Group → Subscription → Resource Group → Resource', 'Sub → MG → RG → Resource', 'No hierarchy'], answer: 1, explain: 'MG → Subscription → RG → Resource. Policy + RBAC inherit downward.' },
      { q: 'Tenant in Microsoft Entra ID is:', options: ['A subscription', 'An instance of Entra ID representing an organization', 'A resource group', 'A VM'], answer: 1, explain: 'Tenant = dedicated Entra ID directory for an org (e.g., contoso.onmicrosoft.com).' },
      { q: 'Which Azure storage service is BEST for unstructured blobs accessed via REST?', options: ['Azure Files', 'Azure Blob Storage', 'Azure Disks', 'Azure Tables'], answer: 1, explain: 'Blob is object storage for unstructured data (images, video, backups, logs).' },
      { q: 'Which Azure compute is fully serverless event-driven?', options: ['Virtual Machines', 'Azure Functions', 'VM Scale Sets', 'Container Instances'], answer: 1, explain: 'Functions = FaaS. ACI is serverless containers but per-container, not event-driven by default.' },
      { q: 'Azure free tier offers:', options: ['No free anything', 'Some services free always, others free for 12 months, $200 credit for 30 days new account', 'Only credit', 'Only services'], answer: 1, explain: 'Combination of always-free services, 12-month free for popular services, and initial $200 credit.' },
      { q: 'A resource was accidentally deleted from a resource group. Recovery option?', options: ['Resources are gone forever', 'Soft delete (where supported) + backup; otherwise re-deploy from IaC', 'Email Microsoft', 'Buy new subscription'], answer: 1, explain: 'Some services (Key Vault, Storage) have soft delete. Backups + IaC enable rebuild.' },
      { q: 'Most efficient way to deploy 50 identical resources?', options: ['Click each in portal', 'ARM template / Bicep / Terraform with parameters and loops', 'PowerShell only', 'Manual REST calls'], answer: 1, explain: 'IaC + copy/loop = repeatable. Bicep is the Azure-native DSL on top of ARM.' },
      { q: 'Azure Resource Manager (ARM) is:', options: ['VM type', 'The deployment + management layer — all operations go through ARM', 'Storage class', 'Old portal'], answer: 1, explain: 'ARM is THE management plane. Portal, CLI, PS, SDKs all call ARM REST.' },
      { q: 'Azure VMs in the same VNet but different subnets — can they communicate by default?', options: ['No', 'Yes (subnets within a VNet can route to each other)', 'Only via Internet', 'Only via VPN'], answer: 1, explain: 'Same VNet = routable subnets. NSGs can restrict.' },
      { q: 'Move resources from RG A to RG B. What is true?', options: ['Always destructive', 'Most resources can move with no downtime; some have restrictions; resource IDs change', 'Free of cost', 'Not supported'], answer: 1, explain: 'Move operation supported with caveats; track impact on dependent resources.' },
      { q: 'Which feature provides Azure-native DDoS protection at L3/L4?', options: ['Azure Firewall', 'Azure DDoS Protection Standard', 'Application Gateway', 'Defender for SQL'], answer: 1, explain: 'DDoS Protection Standard adds telemetry, mitigation tuning, attack analytics on top of basic.' },
      { q: 'Azure Bastion provides:', options: ['Public IP for all VMs', 'Browser-based RDP/SSH to VMs through the portal without exposing public IPs', 'Free Internet', 'DNS service'], answer: 1, explain: 'Bastion proxies admin sessions via TLS to VMs without exposing 22/3389 publicly.' },
      { q: 'Azure Backup vault stores:', options: ['Source code', 'Backup recovery points for VMs, files, SQL, M365 workloads', 'Public images', 'Bicep templates'], answer: 1, explain: 'Recovery Services Vault holds backups + replication metadata.' },
      { q: 'Azure Site Recovery (ASR) provides:', options: ['Backup only', 'Disaster recovery — replicate VMs to another region/site for failover', 'Just monitoring', 'Networking only'], answer: 1, explain: 'ASR orchestrates replication + failover/failback between regions or on-prem to Azure.' },
      { q: 'Which Azure service uses managed identities for VMs/apps to call other Azure APIs without secrets?', options: ['Service principal with stored secret', 'Managed Identity (system-assigned or user-assigned)', 'Shared key', 'Public IP'], answer: 1, explain: 'Managed Identities = Azure-managed service principals. No client secrets to leak.' },
      { q: 'Azure Key Vault stores:', options: ['VM images', 'Keys, secrets, certificates with RBAC + audit', 'Network configs', 'Code repos'], answer: 1, explain: 'Key Vault centralizes secret material with logging and access policies.' },
      { q: 'Which is true about Azure tags?', options: ['Limited to 1 per resource', 'Up to 50 key-value pairs per resource; not inherited by child resources by default; used for cost analysis + automation', 'Tags inherit always', 'Tags free unlimited'], answer: 1, explain: 'Tag inheritance must be configured via policy (modify effect). Useful for chargeback.' },
      { q: 'Which Azure tier of Storage Account uses LRS-zonal redundancy?', options: ['LRS', 'ZRS', 'GRS', 'GZRS'], answer: 1, explain: 'ZRS replicates synchronously across 3 zones in a region.' },
      { q: 'Cosmos DB consistency level offering strongest guarantee?', options: ['Eventual', 'Strong (linearizable, single-region or with bounded perf)', 'Session', 'Consistent prefix'], answer: 1, explain: 'Cosmos offers 5 levels. Strong = linearizable but cross-region tradeoffs.' },
      { q: 'Azure SQL Database vs SQL Managed Instance — primary difference?', options: ['Same product', 'SQL DB = single DB PaaS; Managed Instance = near 100% SQL Server feature parity for lift-and-shift', 'MI is SaaS', 'SQL DB has SQL Agent'], answer: 1, explain: 'MI supports SQL Agent, cross-DB queries, CLR, common to on-prem migrations.' },
      { q: 'M365 is which service model?', options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'], answer: 2, explain: 'Microsoft 365 = SaaS productivity (Exchange Online, SharePoint, Teams, Office apps).' },
      { q: 'Azure Marketplace primarily provides:', options: ['Used hardware', 'Pre-built solutions and VMs from Microsoft and partners (templates, SaaS, container images, IaaS)', 'Stock photos', 'Movies'], answer: 1, explain: 'Pre-built Marketplace offers accelerate deployment with vetted images and templates.' },
      { q: 'Azure free account converts to pay-as-you-go after 30 days. To prevent surprise charges:', options: ['Just hope', 'Enable budgets/alerts + understand what is always-free vs 12-month-free', 'Never use Azure', 'Delete account'], answer: 1, explain: 'Cost Management budgets + alerts catch overruns. Free $200 credit prevents accidental billing initially.' },
      { q: 'Which feature copies an Azure VM to another region for DR?', options: ['Snapshot only', 'Azure Site Recovery (replication + failover orchestration)', 'Tag VM', 'Move resource'], answer: 1, explain: 'ASR handles continuous replication + failover + failback testing.' },
      { q: 'Azure resource provider names are like:', options: ['Free text', 'Microsoft.<ServiceArea> (e.g., Microsoft.Compute, Microsoft.Storage)', 'GUID only', 'Hex strings'], answer: 1, explain: 'RPs use dotted namespaces. Must be registered in subscription before use.' },
      { q: 'Encryption at rest for Azure Storage is:', options: ['Optional', 'On by default with Microsoft-managed keys; can switch to customer-managed keys', 'Disabled by default', 'Available in only some regions'], answer: 1, explain: 'Storage Service Encryption is always on. CMK in Key Vault optional for control.' },
      { q: 'A workload needs predictable bursts. Which compute option fits?', options: ['Spot only', 'B-series burstable VMs accumulate credits when idle, burst when loaded', 'M-series only', 'No fit'], answer: 1, explain: 'B-series for low-baseline + occasional burst (dev/test, light web apps).' },
      { q: 'Which Azure feature enforces tag presence on new resources?', options: ['ARM only', 'Azure Policy with deny or modify effect', 'Resource lock', 'NSG'], answer: 1, explain: 'Policy can deny resource creation without required tags, or auto-add via modify effect.' },
      { q: 'Azure Stack Hub is:', options: ['Public-only', 'On-prem hardware running Azure services for hybrid/sovereign scenarios', 'Old version', 'Marketing only'], answer: 1, explain: 'Azure Stack family runs Azure consistency on-prem (Hub, HCI, Edge).' },
      { q: 'A user has Reader role on a RG. They can:', options: ['Delete resources', 'View resources and metadata but not modify', 'Add roles', 'Change networking'], answer: 1, explain: 'Reader = read-only at the assignment scope.' },
      { q: 'Lowest-cost Azure storage option for rare-access compliance archives:', options: ['Hot tier', 'Cool tier', 'Cold tier', 'Archive tier (offline, hours to rehydrate)'], answer: 3, explain: 'Archive tier = cheapest, rehydrate to hot/cool takes hours.' },
      { q: 'Azure Cloud Shell is:', options: ['Local install required', 'Browser-based shell (Bash or PowerShell) with az and Az modules preloaded', 'PowerShell only', 'Old portal'], answer: 1, explain: 'Cloud Shell uses ephemeral container with persistent Azure Files mount.' },
      { q: 'You want to ensure RGs only deploy to allowed regions. Which feature?', options: ['Resource lock', 'Azure Policy "Allowed locations"', 'NSG', 'Subnet'], answer: 1, explain: 'Built-in policy "Allowed locations" restricts deployment regions.' },
      { q: 'Microsoft Defender for Cloud (formerly Security Center) provides:', options: ['Patch management', 'Continuous security posture (CSPM) + workload protection (CWPP), regulatory dashboards, secure score', 'CDN', 'Storage tiering'], answer: 1, explain: 'Defender for Cloud = unified CSPM/CWPP. Secure score quantifies posture.' },
      { q: 'Microsoft Purview is:', options: ['VPN service', 'Unified data governance — discover, classify, lineage, sensitivity labels across data estate', 'Compute', 'Storage'], answer: 1, explain: 'Purview = data catalog + compliance across data lakes, DBs, SaaS.' }
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
      { q: 'PSScriptAnalyzer is used to:', options: ['Execute scripts faster', 'Lint scripts for style/security issues', 'Encrypt scripts', 'Convert PS to bash'], answer: 1, explain: 'PSScriptAnalyzer is the static analyzer/linter for PowerShell code.' },
      { q: 'Pipe input via parameter binding requires:', options: ['Nothing special', 'Parameter attribute [Parameter(ValueFromPipeline)] or ValueFromPipelineByPropertyName', 'GUI', 'COM object'], answer: 1, explain: 'Pipeline-aware functions declare which params consume the pipeline.' },
      { q: 'Display all properties of an object?', options: ['Format-Table only', 'Select-Object * or Format-List *', 'Get-Help', 'Out-Null'], answer: 1, explain: '`obj | Format-List *` or `Select-Object *` shows every property.' },
      { q: 'Common parameter -ErrorAction Stop converts:', options: ['Nothing', 'A non-terminating error into terminating, so try/catch can handle it', 'Errors to warnings', 'Errors to verbose'], answer: 1, explain: 'Most cmdlet errors are non-terminating by default. Stop lets catch blocks fire.' },
      { q: 'Hashtable literal in PowerShell:', options: ['@(\'a\',\'b\')', '@{Name=\'a\'; Age=10}', '[\'a\',\'b\']', '{a,b}'], answer: 1, explain: '@{} = hashtable. @() = array. Mix freely.' },
      { q: 'Splatting passes parameters via:', options: ['String concat', 'Hashtable + @ prefix (e.g., $params=@{Name=\'x\'}; Get-Thing @params)', 'JSON file', 'CSV'], answer: 1, explain: 'Splatting cleans long parameter lists into a hashtable.' },
      { q: 'PowerShell DSC stands for and does what?', options: ['Desktop System Config', 'Desired State Configuration — declarative config management for Windows/Linux', 'Direct Script Control', 'Disk Space Cleanup'], answer: 1, explain: 'DSC defines desired state in MOF; Local Configuration Manager (LCM) enforces it.' },
      { q: 'Export to and read back JSON:', options: ['Out-File only', 'ConvertTo-Json + ConvertFrom-Json', 'XML only', 'CSV only'], answer: 1, explain: 'ConvertTo-Json -Depth N to handle nested objects; ConvertFrom-Json returns PSCustomObject.' },
      { q: 'Run script regardless of execution policy for current session?', options: ['Disable security', 'powershell.exe -ExecutionPolicy Bypass -File script.ps1', 'Reboot', 'Right-click run'], answer: 1, explain: 'Per-session bypass. Default policy on most Windows is RemoteSigned.' },
      { q: 'Get processes consuming the top 5 CPU?', options: ['Get-Process | head 5', 'Get-Process | Sort-Object CPU -Descending | Select-Object -First 5', 'top 5', 'Get-Top'], answer: 1, explain: 'Sort then Select-Object -First.' },
      { q: 'Stop a service immediately by display name?', options: ['Stop-Service \'World Wide Web Publishing Service\'', 'Stop-Service W3SVC -Force', 'Both work', 'Neither'], answer: 2, explain: 'Both forms work. -Force needed if dependent services exist.' },
      { q: 'Test if a file exists?', options: ['Test-Path .\\file.txt', 'exists file.txt', 'Get-File', 'file?'], answer: 0, explain: 'Test-Path returns boolean. Works for files, dirs, registry, env, cert paths.' },
      { q: 'Read CSV with custom delimiter (tab)?', options: ['Import-Csv -Delimiter \"`t\" file.tsv', 'Get-Content', 'Import-File', 'csv-parse'], answer: 0, explain: '`t = backtick-tab escape. -Delimiter for non-comma.' },
      { q: 'Sleep / pause script for 5 seconds:', options: ['Wait 5', 'Start-Sleep -Seconds 5', 'sleep 5 (cmdlet alias)', 'Both Start-Sleep and sleep alias'], answer: 3, explain: 'sleep is alias for Start-Sleep.' },
      { q: 'Pattern match in conditional?', options: ['if ($s = "abc")', 'if ($s -match \'^abc\\d+$\')', 'if ($s == abc)', 'if (matches)'], answer: 1, explain: '-match uses regex; -like uses wildcards (* ?).' },
      { q: 'Concatenate strings with formatting:', options: ['$a + $b only', '"$a/$b" or "{0}/{1}" -f $a,$b', 'concat()', 'sprintf'], answer: 1, explain: 'Double-quoted interpolation or -f operator with .NET format strings.' },
      { q: 'Loop with index:', options: ['for ($i=0;$i -lt 10;$i++) {...}', 'foreach ($n in 1..10) {...}', '1..10 | ForEach-Object { ... }', 'All of the above'], answer: 3, explain: 'All valid. 1..N is the range operator. ForEach-Object accepts pipeline.' },
      { q: 'Save sensitive credentials encrypted on disk (Windows DPAPI):', options: ['Plaintext file', 'Get-Credential | Export-Clixml (encrypts with user/machine context)', 'Email', 'XML plaintext'], answer: 1, explain: 'Export-Clixml encrypts SecureString with DPAPI per user+machine. Cross-machine = use SecretManagement / Key Vault.' },
      { q: 'Run a script block as a background job:', options: ['Job-Run', 'Start-Job -ScriptBlock { ... }; then Receive-Job', 'Start-Process', 'Add-Job'], answer: 1, explain: 'Start-Job/Receive-Job for long ops. ThreadJob (modern) is lighter weight.' },
      { q: 'Difference between Start-Process and Invoke-Expression?', options: ['Same', 'Start-Process launches a new process (returns immediately or waits with -Wait); Invoke-Expression runs a string in current scope (security risk if string is untrusted)', 'IE is safer', 'SP is older'], answer: 1, explain: 'Avoid Invoke-Expression with user input — it is essentially eval.' },
      { q: 'Modify an environment variable persistently for user?', options: ['$env:VAR=val (current session only)', '[Environment]::SetEnvironmentVariable(\'VAR\',\'val\',\'User\')', 'set VAR=val', 'export VAR=val'], answer: 1, explain: 'Use [Environment]::SetEnvironmentVariable for persistence at User or Machine scope.' },
      { q: 'List installed Windows features (Server)?', options: ['Get-Service', 'Get-WindowsFeature', 'Get-Process', 'List-Features'], answer: 1, explain: 'Get-WindowsFeature on Windows Server (via ServerManager module).' },
      { q: 'Install a Windows feature like IIS?', options: ['Install-Service IIS', 'Install-WindowsFeature -Name Web-Server -IncludeManagementTools', 'Run installer', 'Add-Role'], answer: 1, explain: 'ServerManager module: Install-WindowsFeature.' },
      { q: 'Schedule a script to run daily via task scheduler from PS:', options: ['cron', 'Register-ScheduledTask + New-ScheduledTaskAction + New-ScheduledTaskTrigger', 'at command', 'GUI only'], answer: 1, explain: 'ScheduledTasks module exposes Register/New cmdlets.' },
      { q: 'PowerShell remoting transports?', options: ['Only WinRM', 'WinRM (HTTP 5985 / HTTPS 5986) and SSH (PS 7+)', 'HTTP only', 'Telnet'], answer: 1, explain: 'WinRM classic; SSH-based PSRemoting added in PowerShell 6/7 for cross-platform.' },
      { q: 'Best practice for cmdlet output?', options: ['Write-Host every line', 'Emit objects (Write-Output / implicit) so callers can pipe/filter', 'String formatting only', 'Echo'], answer: 1, explain: 'Write-Host writes to console only. Write-Output (or just outputting) puts objects in pipeline.' },
      { q: '$? after a command means:', options: ['Last command success ($true) or failure ($false)', 'PID', 'Exit code numeric', 'Shell version'], answer: 0, explain: '$? boolean. $LASTEXITCODE holds numeric exit of native executables.' },
      { q: 'Module manifest file extension?', options: ['.ps1', '.psm1', '.psd1', '.psc1'], answer: 2, explain: '.psd1 manifest. .psm1 module script. .ps1 plain script.' },
      { q: 'Reload an updated module without restarting session:', options: ['Restart-Computer', 'Remove-Module + Import-Module (or Import-Module -Force)', 'Get-Module', 'Reboot only'], answer: 1, explain: 'Import-Module -Force re-imports. Functions inside re-created.' },
      { q: 'Find which module provides a cmdlet?', options: ['Get-Command Get-Process', 'Whatis', 'Search-Cmdlet', 'Get-Help only'], answer: 0, explain: 'Get-Command shows Source (module) for each cmdlet.' },
      { q: 'Run a script across servers in parallel (PS 7)?', options: ['ForEach-Object', 'ForEach-Object -Parallel { ... } -ThrottleLimit 10', 'Loop sequential', 'No way'], answer: 1, explain: 'PS 7 adds -Parallel for ForEach-Object. Each iteration runs in runspace.' },
      { q: 'A function should not modify global state. Best param scope?', options: ['$global:var', 'Local params + return values; avoid global modifications', '$script: only', '$env:'], answer: 1, explain: 'Pure functions easier to test + safer. Document any side effects explicitly.' },
      { q: 'Avoid running unsigned scripts in production?', options: ['Disable security', 'Sign scripts (Authenticode) + set ExecutionPolicy AllSigned for prod hosts', 'Run as admin only', 'Email scripts'], answer: 1, explain: 'Signed scripts + AllSigned policy ensure integrity + provenance.' },
      { q: 'Compare two collections fast:', options: ['Manual loops', 'Compare-Object $a $b — shows diffs with SideIndicator', 'String concat', 'Cmp-Coll'], answer: 1, explain: 'Compare-Object handles arrays, filters, properties.' },
      { q: 'Read environment-specific config?', options: ['Hardcode', 'Use Pester data files / .psd1 manifests / env vars / SecretManagement', 'Comment out lines', 'No config'], answer: 1, explain: 'Keep secrets out of code. Use config files or KV references; load per environment.' },
      { q: 'Pester is:', options: ['A virus scanner', 'PowerShell unit/integration test framework', 'A linter', 'A package manager'], answer: 1, explain: 'Pester provides Describe/Context/It blocks, mocks, assertions for testing PowerShell.' }
    ]
  }
];

// Expose globally for app.js
window.COURSES = COURSES;
