# 开发环境搭建

本章介绍如何搭建 IWR1443 的开发环境，包括软件安装、固件烧录和示例程序运行。

## 开发工具链

### 必需软件

| 软件 | 版本 | 用途 | 下载链接 |
|------|------|------|----------|
| **mmWave SDK** | 3.x | 雷达开发工具包 | [TI官网](https://www.ti.com/tool/MMWAVE-SDK) |
| **Code Composer Studio** | 10.x | IDE 和调试工具 | [TI官网](https://www.ti.com/tool/CCSTUDIO) |
| **UniFlash** | 6.x | 固件烧录工具 | [TI官网](https://www.ti.com/tool/UNIFLASH) |
| **mmWave Studio** | 2.x | 可视化配置工具 | [TI官网](https://www.ti.com/tool/MMWAVE-STUDIO) |

### 可选软件

| 软件 | 用途 |
|------|------|
| **MATLAB** | 数据分析和可视化 |
| **Python** | 自定义信号处理 |
| **Wireshark** | 数据包分析 |

## 环境搭建步骤

### 1. 安装 mmWave SDK

mmWave SDK 包含：
- 驱动程序和 API
- 示例应用程序
- 文档和教程
- 可视化工具

**安装步骤**：

1. 下载 mmWave SDK 安装包
2. 运行安装程序：
   ```
   mmwave_sdk_<version>_setup.exe
   ```
3. 选择安装路径（建议默认）：
   ```
   C:\ti\mmwave_sdk_<version>
   ```
4. 完成安装

**目录结构**：
```
mmwave_sdk/
├── packages/          # SDK 软件包
├── tools/            # 工具和可视化程序
├── docs/             # 文档
└── demos/            # 示例程序
```

### 2. 安装 Code Composer Studio (CCS)

CCS 是 TI 官方 IDE，基于 Eclipse。

**安装步骤**：

1. 下载 CCS 安装包
2. 运行安装程序
3. 选择产品：
   - ✓ Sitara AMx Processors
   - ✓ mmWave Sensors
   - ✓ Hercules Safety MCUs
4. 选择调试探针：
   - ✓ TI XDS Debug Probes
5. 完成安装

### 3. 安装 UniFlash

用于烧录固件到 Flash。

**安装步骤**：

1. 下载并安装 UniFlash
2. 启动 UniFlash
3. 选择设备：`IWR1443`
4. 选择连接：`XDS110 USB Debug Probe`

### 4. 安装驱动程序

**Windows 驱动**：

连接 IWR1443BOOST 开发板后，Windows 会自动安装驱动。检查设备管理器：

```
端口 (COM & LPT)
├── XDS110 Class Application/User UART (COM4)
├── XDS110 Class Auxiliary Data Port (COM5)
└── XDS110 Class JTAG Emulator (COM6)
```

**Linux 驱动**：

```bash
# 添加 udev 规则
sudo cp <ccs_install>/ccs/install_scripts/71-ti-xds110.rules /etc/udev/rules.d/
sudo udevadm control --reload-rules
```

## 硬件连接

### 连接开发板

1. **USB 连接**：
   ```
   PC ──[USB线]── IWR1443BOOST
   ```

2. **电源**：
   - 通过 USB 供电（5V）
   - 或使用外部电源适配器（5V/2A）

3. **跳线设置**：
   - SOP[2:0] = 000（功能模式）
   - SOP[2:0] = 001（烧录模式）

### 启动模式

| SOP2 | SOP1 | SOP0 | 模式 | 说明 |
|------|------|------|------|------|
| 0 | 0 | 0 | 功能模式 | 从 Flash 启动 |
| 0 | 0 | 1 | Flash 编程模式 | UniFlash 烧录 |
| 1 | 1 | 0 | 开发模式 | CCS 调试 |

## 快速开始

### 使用预编译固件

#### 1. 烧录固件

**使用 UniFlash**：

1. 设置跳线为烧录模式（SOP = 001）
2. 重启开发板
3. 启动 UniFlash，选择设备 IWR1443
4. 选择固件文件：
   ```
   mmwave_sdk/packages/ti/demo/xwr14xx/mmw/xwr14xx_mmw_demo.bin
   ```
5. 点击 "Load Image" 开始烧录
6. 烧录完成后，设置跳线为功能模式（SOP = 000）
7. 重启开发板

#### 2. 运行 Visualizer

1. 启动可视化工具：
   ```
   mmwave_sdk\tools\visualizer\mmWave_Demo_Visualizer.exe
   ```

2. 配置 COM 口：
   - Configuration Port: COM4
   - Data Port: COM5

3. 选择配置文件：
   ```
   mmwave_sdk\packages\ti\demo\xwr14xx\mmw\profiles\profile_2d.cfg
   ```

4. 点击 "Send Config to mmWave Device"

5. 启动雷达：点击 "Sensor Start"

6. 观察实时检测结果：
   - 散点图：目标的距离和角度
   - 热力图：Range-Doppler Map
   - 统计信息：检测数、帧率等

### 修改配置文件

配置文件示例（`profile_2d.cfg`）：

```cfg
% 配置雷达参数

dfeDataOutputMode 1
channelCfg 15 5 0
adcCfg 2 1
adcbufCfg -1 0 1 1 1
profileCfg 0 77 429 7 57.14 0 0 70 1 256 5209 0 0 30

chirpCfg 0 0 0 0 0 0 0 1
chirpCfg 1 1 0 0 0 0 0 4
frameCfg 0 1 16 0 100 1 0

lowPower 0 0
guiMonitor -1 1 1 0 0 0 1
cfarCfg -1 0 2 8 4 3 0 15 1
cfarCfg -1 1 0 4 2 3 1 15 1

multiObjBeamForming -1 1 0.5
clutterRemoval -1 0
calibDcRangeSig -1 0 -5 8 256
extendedMaxVelocity -1 0
bpmCfg -1 0 0 1

sensorStart
```

**主要参数说明**：

| 参数 | 含义 |
|------|------|
| `profileCfg` | Chirp 配置（起始频率、斜率、采样等）|
| `chirpCfg` | Chirp 时序配置 |
| `frameCfg` | 帧配置（chirp 数、周期等）|
| `cfarCfg` | CFAR 检测参数 |
| `clutterRemoval` | 静态杂波抑制 |

## 编译示例程序

### 在 CCS 中打开项目

1. 启动 Code Composer Studio
2. 导入项目：
   ```
   File → Import → CCS Projects → Select search-directory
   ```
   选择路径：
   ```
   mmwave_sdk\packages\ti\demo\xwr14xx\mmw
   ```

3. 导入以下项目：
   - `mmw_mss` (Master Subsystem)
   - `mmw_dss` (DSP Subsystem)

### 编译项目

1. 选择项目 `mmw_mss`
2. 右键 → Build Project
3. 等待编译完成
4. 重复步骤编译 `mmw_dss`

### 调试程序

1. 设置跳线为开发模式（SOP = 110）
2. 重启开发板
3. 在 CCS 中创建 Target Configuration：
   ```
   File → New → Target Configuration File
   ```
   - Connection: Texas Instruments XDS110 USB Debug Probe
   - Board: IWR1443

4. 启动调试会话：
   ```
   Run → Debug Configurations
   ```
   - Target: IWR1443 MSS
   - Program: mmw_mss.xer4f

5. 设置断点，单步调试

## Python 开发

### 读取雷达数据

```python
import serial
import numpy as np
import struct

class IWR1443Reader:
    def __init__(self, config_port='COM4', data_port='COM5'):
        self.config_port = serial.Serial(config_port, 115200)
        self.data_port = serial.Serial(data_port, 921600)
    
    def send_config(self, config_file):
        """发送配置文件"""
        with open(config_file, 'r') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('%'):
                    self.config_port.write((line + '\n').encode())
                    time.sleep(0.01)
    
    def read_frame(self):
        """读取一帧数据"""
        # 查找魔数
        magic = b'\x02\x01\x04\x03\x06\x05\x08\x07'
        
        while True:
            byte = self.data_port.read(1)
            if byte == magic[0:1]:
                header = byte + self.data_port.read(len(magic) - 1)
                if header == magic:
                    break
        
        # 读取帧头
        header_data = self.data_port.read(32)
        version, total_packet_len, platform = struct.unpack('<III', header_data[:12])
        
        # 读取数据包
        packet_data = self.data_port.read(total_packet_len - 40)
        
        # 解析 TLV
        detections = self.parse_tlv(packet_data)
        
        return detections
    
    def parse_tlv(self, data):
        """解析 TLV 格式数据"""
        offset = 0
        detections = []
        
        while offset < len(data):
            tlv_type, tlv_length = struct.unpack('<II', data[offset:offset+8])
            offset += 8
            
            if tlv_type == 1:  # 检测点列表
                num_detected_obj = tlv_length // 16
                for i in range(num_detected_obj):
                    obj_data = struct.unpack('<ffff', 
                                            data[offset:offset+16])
                    detections.append({
                        'x': obj_data[0],
                        'y': obj_data[1],
                        'z': obj_data[2],
                        'velocity': obj_data[3]
                    })
                    offset += 16
            else:
                offset += tlv_length
        
        return detections

# 使用示例
radar = IWR1443Reader('COM4', 'COM5')
radar.send_config('profile_2d.cfg')

while True:
    detections = radar.read_frame()
    print(f"检测到 {len(detections)} 个目标")
    for det in detections:
        print(f"  位置: ({det['x']:.2f}, {det['y']:.2f}) m, "
              f"速度: {det['velocity']:.2f} m/s")
```

### 数据可视化

```python
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

fig, ax = plt.subplots()
scatter = ax.scatter([], [])
ax.set_xlim(-10, 10)
ax.set_ylim(0, 20)
ax.set_xlabel('X (m)')
ax.set_ylabel('Y (m)')
ax.set_title('mmWave Radar Detections')
ax.grid(True)

def update(frame):
    detections = radar.read_frame()
    if detections:
        x = [d['x'] for d in detections]
        y = [d['y'] for d in detections]
        scatter.set_offsets(np.c_[x, y])
    return scatter,

ani = FuncAnimation(fig, update, interval=50, blit=True)
plt.show()
```

## MATLAB 开发

```matlab
% 配置串口
configPort = serialport('COM4', 115200);
dataPort = serialport('COM5', 921600);

% 发送配置
configFile = 'profile_2d.cfg';
sendConfig(configPort, configFile);

% 读取数据
while true
    frame = readRadarFrame(dataPort);
    
    % 可视化
    if ~isempty(frame.detections)
        scatter(frame.detections(:,1), frame.detections(:,2), 'filled');
        xlim([-10 10]);
        ylim([0 20]);
        xlabel('X (m)');
        ylabel('Y (m)');
        title('Radar Detections');
        grid on;
        drawnow;
    end
end
```

## 常见问题

### 1. 无法连接设备

**症状**：设备管理器中无 COM 口

**解决**：
- 检查 USB 线缆是否正常
- 重新安装驱动
- 尝试不同的 USB 接口

### 2. 烧录失败

**症状**：UniFlash 报错

**解决**：
- 确认跳线设置为烧录模式
- 重启开发板
- 使用管理员权限运行 UniFlash

### 3. 无数据输出

**症状**：配置成功但无检测数据

**解决**：
- 检查配置文件中的 `guiMonitor` 参数
- 确认目标在雷达视场内
- 检查数据端口设置

### 4. 编译错误

**症状**：CCS 编译失败

**解决**：
- 检查 SDK 和 CCS 版本兼容性
- 清理项目后重新编译
- 检查路径中是否有中文或特殊字符

---

## 下一步

- [FMCW 调制](../mmwave/fmcw.md) - 深入理解雷达原理
- [信号处理](../mmwave/signal-processing.md) - 自定义信号处理算法
- [参考资料](../references.md) - 更多学习资源

## 参考资料

1. Texas Instruments. *mmWave SDK User Guide*.
2. Texas Instruments. *IWR1443 mmWave Demo*.
3. TI E2E Forums. [https://e2e.ti.com/](https://e2e.ti.com/)
