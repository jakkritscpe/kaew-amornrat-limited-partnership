import { AdminLayout } from '../../components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Building2, Mail, Phone, Users } from 'lucide-react';

export function Dashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">แดชบอร์ด</h1>
          <p className="text-gray-500">ภาพรวมระบบ Kaew Amornrat</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                บริการทั้งหมด
              </CardTitle>
              <Building2 className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                ข้อความติดต่อ
              </CardTitle>
              <Mail className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                สายด่วน
              </CardTitle>
              <Phone className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                ทีมงาน
              </CardTitle>
              <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Section */}
        <Card>
          <CardHeader>
            <CardTitle>ยินดีต้อนรับสู่ระบบหลังบ้าน</CardTitle>
            <CardDescription>
              Kaew Amornrat Limited Partnership - รับเหมาก่อสร้างครบวงจร
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              ระบบหลังบ้านนี้ช่วยให้คุณจัดการข้อมูลและติดตามการติดต่อจากลูกค้าได้อย่างมีประสิทธิภาพ
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">ฟีเจอร์ที่วางแผนไว้:</h3>
              <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                <li>จัดการข้อความติดต่อจากลูกค้า</li>
                <li>อัพเดทข้อมูลบริการและโปรเจกต์</li>
                <li>จัดการเนื้อหาเว็บไซต์</li>
                <li>ดูสถิติและรายงาน</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
