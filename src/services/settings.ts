
export class SettingService {
    
    private isAltView = false;

    setAltView(altView: boolean)
    {
        this.isAltView = altView;
    }

    isAltViewSet() : boolean
    {
        return this.isAltView;
    }

    
}